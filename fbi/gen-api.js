const generateAPISchemaTypes = require('./codegen/generate-api-schema-types')
const generateApiResolvers = require('./codegen/generate-api-resolvers')
const logger = ctx.logger
const opts = ctx.options

module.exports = async () => {
  if (!opts.generate) {
    ctx.logger.warn(
      'Nothing to generate. Please check "generate" configs in "options.js"'
    )
  }

  logger.debug('4...generateAPISchemaTypes')
  await generateAPISchemaTypes(opts.generate.api)

  if (
    opts.generate.api.resolverTypesOutput &&
    opts.generate.api.resolversOutput
  ) {
    logger.debug('5...generateApiResolvers')
    await generateApiResolvers(opts.generate.api, opts.prettifyOptions)
  }
}
