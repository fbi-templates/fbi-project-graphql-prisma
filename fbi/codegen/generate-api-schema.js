const { mkdirp, read, write } = ctx.utils.fs
const { cwd } = ctx.utils.path
const { style, fs } = ctx.utils
const { relative, dirname } = require('path')
const { parseInternalTypes } = require('prisma-generate-schema')

module.exports = async (modelInput, modelOutput, schemaOutput, cover) => {
  const modelInputPath = cwd(modelInput)
  const modelOutputPath = cwd(modelOutput)
  let schemaOutputPath = cwd(schemaOutput)

  const modelInputString = await read(modelInputPath)
  const modelOutputString = await read(modelOutputPath)

  const modelTypes = parseInternalTypes(modelInputString)
  ctx.logger.debug('modelTypes:\n', modelTypes)

  // const validTypes = ['Query', 'Mutation', 'Subscription'].concat(
  const validTypes = ['Query', 'Mutation']
  // const validTypes = ['Query', 'Mutation'].concat(
  //   modelTypes.filter(t => !t.isEnum).map(({ name }) => name)
  // )
  ctx.logger.debug('validTypes:', validTypes)

  const matchedArr = []

  for (let type of validTypes) {
    const srcRegex = new RegExp(`type ${type} .+?}`, 's')
    const matched = modelOutputString.match(srcRegex)
    if (matched[0]) {
      matchedArr.push(matched[0])
    }
  }

  const imports = `# import * from '${relative(dirname(schemaOutputPath), modelOutputPath)}'\n\n`

  const schemaString = imports + matchedArr.join('\n\n')

  ctx.logger.debug('schemaString:\n', schemaString)

  if (!cover && (await fs.exist(schemaOutputPath))) {
    schemaOutputPath += '.tmp'
  }

  await mkdirp(schemaOutputPath)
  await write(schemaOutputPath, schemaString)

  ctx.logger.log(
    `✔ API schema generated at ${style.green(relative(process.cwd(), schemaOutputPath))}`
  )
}
