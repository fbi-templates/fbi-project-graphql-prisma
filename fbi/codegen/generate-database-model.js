const generateCRUDSchemaString = require('prisma-generate-schema').default
const { fs, path, style } = ctx.utils

module.exports = async opts => {
  const modelString = await fs.read(path.cwd(opts.modelInput))
  const schemaString = generateCRUDSchemaString(modelString)
  await fs.write(path.cwd(opts.modelOutput), schemaString)

  ctx.logger.log(
    `✔ Database schema generated to ${style.green(opts.modelOutput)}`
  )
}
