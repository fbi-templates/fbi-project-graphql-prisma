import { GraphQLServer } from 'graphql-yoga'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import { logger, loggerMiddleware } from './helpers/logger'
import { resolvers } from './resolvers'
import { configs } from './configs'
import { Prisma } from './generated/prisma'

const typeDefs = mergeTypes(fileLoader(`${__dirname}/schema/**/*.graphql`), {
  all: true
})

const db = new Prisma({
  endpoint: 'http://localhost:4466',
  debug: true
})

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [loggerMiddleware],
  context: (req: any) => ({
    ...req,
    db
  })
} as any)

server
  .start(configs.serverOptions, ({ port }) => {
    logger.info(
      `🚀 Server ready at http://localhost:${port}${
        configs.serverOptions.endpoint
      }`
    )
  })
  .catch(err => {
    throw err
  })
