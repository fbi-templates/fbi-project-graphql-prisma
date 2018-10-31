const { buildSchema } = require('graphql')
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
const logger = ctx.logger

module.exports = (src, onlyTypes) => {
  try {
    const typeDefs = mergeTypes(fileLoader(src), {
      all: true
    })

    logger.debug('typeDefs:\n', typeDefs)

    if (onlyTypes) {
      return typeDefs
    }
    return buildSchema(typeDefs)
  } catch (err) {
    logger.error(err.message)
    process.exit(1)
  }
}
