const { TypescriptGenerator } = require('graphql-binding')
const schemaLoader = require('./schema-loader')
const { mkdirp, write } = ctx.utils.fs
const { cwd } = ctx.utils.path
const { style } = ctx.utils

module.exports = async opts => {
  await mkdirp(opts.schemaTypesOutput)
  const schema = await schemaLoader(cwd(opts.schemaInput))
  const typescriptGenerator = new TypescriptGenerator({
    schema,
    inputSchemaPath: opts.schemaInput,
    outputBindingPath: opts.schemaTypesOutput
  })

  typescriptGenerator.scalarMapping = {
    Int: 'number',
    String: 'string',
    ID: 'string | number',
    Float: 'number',
    Boolean: 'boolean',
    DateTime: 'any', // 'Date | string': issue when generate resolvers
    Json: 'any'
  }

  const types = typescriptGenerator.renderTypes()

  await write(cwd(opts.schemaTypesOutput), types)

  ctx.logger.log(
    `✔ API Schema types generated at ${style.green(opts.schemaTypesOutput)}`
  )
}
