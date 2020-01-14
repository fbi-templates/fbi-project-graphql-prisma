import { join } from 'path'
import * as url from 'url'
import { configs } from './configs'
import { resolvers } from './resolvers/'
import { Prisma } from './generated/db'
import { schemaLoader } from './helpers/schema-loader'
import { logger, loggerMiddleware } from './helpers/logger'
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'

const db = new Prisma({
  endpoint: 'http://localhost:4466',
  debug: true
})

const schemaPaths = join(__dirname, 'schema/**/*.graphql')

schemaLoader(schemaPaths, true).then(async typeDefs => {
  const schema = makeExecutableSchema({
    typeDefs: gql`
      ${typeDefs}
    `,
    resolvers: resolvers as any,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
  const schemaWithMiddlewares = applyMiddleware(schema, loggerMiddleware)

  const server = new ApolloServer({
    schema: schemaWithMiddlewares,
    context: ({ req }: { req: object }) => ({
      ...req,
      db
    }),
    playground: true
  })

  server.setGraphQLPath(configs.serverOptions.endpoint)

  const ret = await server.listen(configs.serverOptions.port)
  logger.info(`🚀 Server ready at ${url.resolve(ret.url, configs.serverOptions.endpoint)}`)
  logger.info(`subscriptions url: ${ret.subscriptionsUrl}`)
})
