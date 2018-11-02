const generateDatabaseModel = require('./codegen/generate-database-model')
const generateDatabaseClient = require('./codegen/generate-database-client')
const generateAPISchema = require('./codegen/generate-api-schema')
const logger = ctx.logger
const opts = ctx.options

module.exports = async () => {
  if (!opts.generate) {
    ctx.logger.warn(
      'Nothing to generate. Please check "generate" configs in "options.js"'
    )
  }

  if (opts.generate.db) {
    logger.debug('1... generateDatabaseModel')
    await generateDatabaseModel(opts.generate.db)
    logger.debug('2... generateDatabaseClient')
    await generateDatabaseClient(
      opts.generate.db,
      opts.generate.prettifyOptions,
      opts.generate.db.prismaYml
    )

    if (opts.generate.api) {
      logger.debug('3... generate api schema')
      await generateAPISchema(
        opts.generate.db.modelInput,
        opts.generate.db.modelOutput,
        opts.generate.api.schemaOutput,
        opts.generate.api.cover
      )
    }
  } else {
    ctx.logger.log('configs of db generation not found')
  }
}
