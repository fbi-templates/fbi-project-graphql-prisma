const { codegen } = require('@graphql-codegen/core')
const typescriptPlugin = require('@graphql-codegen/typescript')
const typescriptResolversPlugin = require('@graphql-codegen/typescript-resolvers')
const { schemaLoader } = require('./schema-loader')
const { fs, path, style } = ctx.utils

module.exports = async (api, prettifyOptions) => {
  const { ast } = schemaLoader(path.cwd(api.schemaInput))
  const config = {
    filename: path.cwd(api.resolverTypesOutput),
    schema: ast,
    plugins: [
      {
        typescript: {} // Here you can pass configuration to the plugin
      },
      {
        typescriptResolvers: {}
      }
    ],
    pluginMap: {
      typescript: typescriptPlugin,
      typescriptResolvers: typescriptResolversPlugin
    }
  }

  const output = await codegen(config)
  await fs.write(path.cwd(api.resolverTypesOutput), output)
  ctx.logger.log(
    `✔ API Resolver types generated at ${style.green(api.resolverTypesOutput)}`
  )
}
