const fs = require('fs')
const globby = require('globby')
const { join, dirname } = require('path')
const { buildSchema } = require('graphql')
const { importSchema, parseSDL } = require('graphql-import')
const { mergeTypes } = require('merge-graphql-schemas')

module.exports = async (src, onlyTypes) => {
  try {
    const files = src.includes('*') ? await globby(src) : [src]

    // read file content
    const schemas = files.map(f => ({
      content: fs.readFileSync(f, 'utf8'),
      path: f
    }))

    // record and transform import statement
    const imports = []
    schemas.map(s => {
      const rawModules = parseSDL(s.content)
      if (rawModules && rawModules.length) {
        for (let row of rawModules) {
          const importFrom = join(dirname(s.path), row.from)
          if (!imports.includes(importFrom)) {
            imports.push(
              `# import ${row.imports.join(',')} from '${importFrom}'`
            )
          }
        }
      }
    })

    // merge types
    const mergedContent = mergeTypes(schemas.map(s => s.content), {
      all: true
    })

    if (!mergedContent) {
      return ''
    }

    // import graphql modules
    const contentAndImports = imports.join('\n') + '\n' + mergedContent
    const ret = importSchema(contentAndImports)
    // console.log('ret:', ret)

    // return raw or schema
    return onlyTypes ? ret : buildSchema(ret)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
