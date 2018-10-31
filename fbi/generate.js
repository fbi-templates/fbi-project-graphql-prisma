const generateSchema = require('./helpers/generate-schema')
const generateModel = require('./helpers/generate-model')
const generateBinding = require('./helpers/generate-binding')
const generateResolver = require('./helpers/generate-resolver')
const logger = ctx.logger
const opts = ctx.options

module.exports = async () => {
  if (!opts.generate || !opts.generate.paths) {
    ctx.logger.warn(
      'Nothing to generate. Please check "generate" configs in "options.js"'
    )
  }

  logger.debug('1...')

  // geneate datamodel schema and data-bindings
  if (opts.generate.model) {
    await generateModel(opts.generate.model)
    await generateBinding(opts.generate.model)
  }

  logger.debug('2...')

  // geneate schema types
  if (opts.generate.paths.schemaInput) {
    await generateSchema(opts.generate)
  }

  logger.debug('3...')

  // generate API resolvers
  if (
    opts.generate.paths.resolverTypesOutput &&
    opts.generate.paths.resolversOutput
  ) {
    await generateResolver(opts.generate)
  }
}
