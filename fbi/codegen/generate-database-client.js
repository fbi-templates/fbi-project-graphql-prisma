const { relative, dirname } = require('path')
const { buildSchema } = require('graphql')
const { importSchema } = require('graphql-import')
const PrismaClientGenerator = require('./prisma-client-generator')
const yaml = require('js-yaml')
const { DatabaseType, IGQLType } = require('prisma-datamodel')
const { parseInternalTypes } = require('prisma-generate-schema')
const { fs, path, style } = ctx.utils

module.exports = async (opts, prettifyOptions, prismaYml) => {
  const input = path.cwd(opts.modelOutput)
  const output = path.cwd(opts.clientOutput)
  const schema = buildSchema(importSchema(input))
  const typeDefsRelativePath = relative(
    dirname(opts.clientOutput),
    opts.modelOutput
  )
  const modelString = await fs.read(path.cwd(opts.modelInput))
  const internalTypes = parseInternalTypes(modelString, DatabaseType.postgres)
    .types

  const generator = new PrismaClientGenerator({
    schema,
    typeDefsRelativePath,
    internalTypes
  })

  let endpoint = "'http://localhost:4466'"

  try {
    const doc = yaml.safeLoad(await fs.read(path.cwd(prismaYml)))
    endpoint = `'${doc.endpoint}'`
  } catch (err) {
    ctx.logger.error(err)
  }

  const code = generator.render(
    {
      endpoint
    },
    prettifyOptions
  )

  await fs.write(output, code)

  ctx.logger.log(
    `✔ Database client generated at ${style.green(opts.clientOutput)}`
  )
}
