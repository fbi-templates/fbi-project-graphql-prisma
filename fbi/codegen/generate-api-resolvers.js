const { ResolverScaffolder } = require('./resolver-scaffolder')
const { relative, dirname, basename, sep } = require('path')
const { cwd, join } = ctx.utils.path
const { write, mkdirp, exist } = ctx.utils.fs
const { style } = ctx.utils

module.exports = async (api, prettifyOptions) => {
  const resolverScaffolder = new ResolverScaffolder({
    schemaPath: cwd(api.schemaInput),
    prettifyOptions,
    ignoreNames: api.resolverIgnore || []
  })

  const ret = resolverScaffolder.renderPrisma()
  let outPath = cwd(api.resolversOutput, 'index.ts')
  await mkdirp(outPath)

  if (!api.cover && (await exist(outPath))) {
    outPath += '.tmp'
  }

  await write(
    outPath,
    ret
      .replace(
        '[TEMPLATE-INTERFACES-PATH]',
        relative(
          dirname(outPath),
          join(
            dirname(api.resolverTypesOutput),
            basename(api.resolverTypesOutput, '.ts')
          )
        )
      )
      .replace(new RegExp('\\' + sep, 'g'), '/')
  )
  ctx.logger.log(
    `✔ API Resolvers scaffolded at ${style.green(
      relative(process.cwd(), outPath)
    )}`
  )
}
