const fs = require('fs')
const path = require('path')
const globby = require('globby')
const { parse, buildSchema } = require('graphql')
const { importSchema, parseSDL } = require('graphql-import')
const { mergeTypes } = require('merge-graphql-schemas')

exports.schemaLoader = src => {
  const files = src.includes('*') ? globby.sync(src) : [src]

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
        const importFrom = path.join(path.dirname(s.path), row.from)
        if (!imports.includes(importFrom)) {
          imports.push(`# import ${row.imports.join(',')} from '${importFrom}'`)
        }
      }
    }
  })

  // merge types
  const mergedContent = mergeTypes(schemas.map(s => s.content), {
    all: true
  })

  // import graphql modules
  const contentAndImports = imports.join('\n') + '\n' + mergedContent
  const raw = importSchema(contentAndImports)

  // return raw and schema
  return {
    raw,
    ast: parse(raw),
    schema: buildSchema(raw)
  }
}
