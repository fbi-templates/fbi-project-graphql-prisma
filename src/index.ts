import { join } from 'path'
import { configs } from './configs'
import { resolvers } from './resolvers'
import { DB } from './generated/db'
import { schemaLoader } from './helpers/schema-loader'
import { logger, loggerMiddleware } from './helpers/logger'
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'

const db = new DB({
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

  const { url } = await server.listen(configs.serverOptions.port)
  logger.info(`🚀 Server ready at ${join(url, configs.serverOptions.endpoint)}`)
})
