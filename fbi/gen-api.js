const generateApiResolvers = require('./codegen/generate-api-resolvers')
const generateApiResolverTypes = require('./codegen/generate-api-resolvers-types')
const logger = ctx.logger
const opts = ctx.options

module.exports = async () => {
  if (!opts.generate) {
    ctx.logger.warn(
      'Nothing to generate. Please check "generate" configs in "options.js"'
    )
  }

  logger.debug('4...generateApiResolverTypes')
  await generateApiResolverTypes(
    opts.generate.api,
    opts.generate.prettifyOptions
  )

  if (
    opts.generate.api.resolverTypesOutput &&
    opts.generate.api.resolversOutput
  ) {
    logger.debug('5...generateApiResolvers')
    await generateApiResolvers(opts.generate.api, opts.generate.prettifyOptions)
  }
}
