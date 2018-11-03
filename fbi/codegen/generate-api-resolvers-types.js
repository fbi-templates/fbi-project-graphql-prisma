const { generate } = require('graphql-code-generator')
const prettier = require('prettier')
const { fs, path, style } = ctx.utils

module.exports = async (api, prettifyOptions) => {
  const ret = await generate({
    schema: path.cwd(api.schemaInput),
    out: path.cwd(api.resolverTypesOutput),
    template: 'graphql-codegen-typescript-resolvers-template',
    overwrite: true,
    silent: true
  })

  // const formated = prettier.format(ret[0].content, {
  //   semi: false,
  //   singleQuote: true,
  //   trailingComma: 'none',
  //   parser: 'typescript',
  //   proseWrap: 'never',
  //   printWidth: 100
  // })

  // await fs.write(path.cwd(api.resolverTypesOutput), formated)

  ctx.logger.log(
    `✔ API Resolver types generated at ${style.green(api.resolverTypesOutput)}`
  )
}
