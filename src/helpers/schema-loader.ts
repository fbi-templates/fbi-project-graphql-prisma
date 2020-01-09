import * as fs from 'fs'
import * as path from 'path'
import * as globby from 'globby'
import { buildSchema } from 'graphql'
import { importSchema, parseSDL } from 'graphql-import'
import { mergeTypes } from 'merge-graphql-schemas'

export const schemaLoader = async (src: string, onlyTypes?: boolean) => {
  try {
    const files = src.includes('*') ? await globby(src) : [src]

    // read file content
    const schemas = files.map((f: string) => ({
      content: fs.readFileSync(f, 'utf8'),
      path: f
    }))

    // record and transform import statement
    const imports: string[] = []
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
    const mergedContent = mergeTypes(
      schemas.map(s => s.content),
      {
        all: true
      }
    )

    if (!mergedContent) {
      return ''
    }

    // import graphql modules
    const contentAndImports = imports.join('\n') + '\n' + mergedContent
    const ret = importSchema(contentAndImports)

    // return raw or schema
    return onlyTypes ? ret : buildSchema(ret)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
