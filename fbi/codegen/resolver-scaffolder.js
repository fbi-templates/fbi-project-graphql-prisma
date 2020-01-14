const { isScalarType, isEnumType, isUnionType, visit } = require('graphql')
const prettier = require('prettier')
const { schemaLoader } = require('./schema-loader')

class ResolverScaffolder {
  constructor ({ schemaPath, prettifyOptions, ignoreNames }) {
    const { ast, schema } = schemaLoader(schemaPath)
    this.ast = ast
    this.schema = schema
    this.ignoreNames = ignoreNames
    this.prettifyOptions = prettifyOptions
    this.typeMap = this.schema.getTypeMap()
    this.resolvers = null
    this.rootTypes = ['Query', 'Mutation', 'Subscription']
  }

  renderPrisma () {
    if (!this.resolvers) {
      this.extractTypes(this.ast)
    }

    let str = ''
    const keys = Object.keys(this.resolvers)

    // header
    const importNames =
      keys.map(name => `${name}Resolvers`).join(', ') + ', Resolvers'
    const header = `import { ${importNames} } from '[TEMPLATE-INTERFACES-PATH]'`
    str += header

    // body
    for (let key of keys) {
      if (key.endsWith('Connection')) {
        str += `\n\nconst ${key}: ${key}Resolvers = {
          pageInfo: (parent, args, ctx, info) => parent.pageInfo,
          edges: (parent, args, ctx, info) => parent.edges,
          aggregate: (parent, args, ctx, info) => parent.aggregate
        }
      `
      } else {
        str += `\n\nconst ${key}: ${key}Resolvers = {
      `

        const fields = []
        for (let field of this.resolvers[key]) {
          const argsIn =
            field.args.length === 1 ? `{ ${field.args[0]} }` : 'args'
          const argsOut = field.args.length === 1 ? field.args[0] : 'args'
          let fieldStr = ''

          if (this.rootTypes.includes(key)) {
            if (key === 'Subscription') {
              fieldStr = `
            ${field.name}: {
              subscribe: (parent: any, { where }: any, ctx: any, info: any) => ctx.db.$subscribe.${field.name}(where, info).node(),
              resolve: (parent: any, { where }: any, ctx: any, info: any) => ({ mutation: where.mutation_in[0], node: parent })
              }
            `
            } else if (key === 'Query' && field.name.endsWith('Connection')) {
              fieldStr = `${field.name}: (parent, ${argsIn}, ctx, info) => ({
              pageInfo: ctx.db.${field.name}(${argsOut}).pageInfo(),
              edges: ctx.db.${field.name}(${argsOut}).edges(),
              aggregate: ctx.db.${field.name}(${argsOut}).aggregate()
            })
            `
            } else {
              fieldStr = `${field.name}: (parent, ${argsIn}, ctx, info) => ctx.db.${field.name}(${argsOut}, info)`
            }
          } else {
            const parent =
              key.substr(0, 1).toLowerCase() + key.substr(1, key.length - 1)
            fieldStr = `${field.name}: (parent, args, ctx, info) => ctx.db.${parent}({ id: parent.id }, info).${field.name}()`
          }
          fields.push(fieldStr)
        }

        str += `${fields.join(',\n')} }`
      }
    }

    // footer
    const keysStr = keys.join(',')
    const footer = `\n\nexport const resolvers: Resolvers = { ${keysStr} }`
    str += footer

    return this.prettify(str)
  }

  extractTypes (ast) {
    this.resolvers = {}
    visit(this.ast, {
      ObjectTypeDefinition: node => {
        const name = node.name.value
        if (!this.invalidName(name)) {
          this.resolvers[name] = []
          if (node.kind === 'ObjectTypeDefinition') {
            visit(node, {
              FieldDefinition: fieldNode => {
                const nodeName = fieldNode.name.value

                if (
                  !this.invalidName(nodeName) &&
                  this.validType(this.getTypeName(fieldNode.type))
                ) {
                  this.resolvers[name].push({
                    name: nodeName,
                    // type: fieldNode.type.kind === 'NonNullType'
                    //   ? {
                    //     required: true,
                    //     name: fieldNode.type.name
                    //         ? fieldNode.type.name.value
                    //         : // : fieldNode.type.type.name.value
                    //           fieldNode.type
                    //   }
                    //   : {
                    //     name: fieldNode.type.name
                    //         ? fieldNode.type.name.value
                    //         : // : fieldNode.type.type.name.value
                    //           fieldNode.type
                    //   },
                    args: fieldNode.arguments.map(a => a.name.value),
                    desc: fieldNode.description
                  })
                }
              }
            })
          }
        }
      }
    })

    return this.resolvers
  }

  prettify (str) {
    return prettier.format(
      str,
      this.prettifyOptions || {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        parser: 'babel',
        proseWrap: 'never',
        printWidth: 100
      }
    )
  }

  getTypeName (type) {
    return type.name
      ? type.name.value
      : type.type && type.type.name
      ? type.type.name.value
      : type.type.type && type.type.type.name
      ? type.type.type.name.value
      : null
  }

  validType (name) {
    const type = this.typeMap[name]
    return !(isScalarType(type) || isEnumType(type) || isUnionType(type))
  }

  invalidName (name) {
    for (let t of this.ignoreNames) {
      const fix = t.replace('*', '')
      if (name === t) {
        return true
      } else if (t.startsWith('*') && name.endsWith(fix)) {
        return true
      } else if (t.endsWith('*') && name.startsWith(fix)) {
        return true
      }
    }
    return false
  }
}

module.exports = {
  ResolverScaffolder
}
