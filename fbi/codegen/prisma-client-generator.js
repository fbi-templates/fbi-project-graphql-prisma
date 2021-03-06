const { TypescriptGenerator } = require('prisma-client-lib')

module.exports = class PrismaClientGenerator extends TypescriptGenerator {
  constructor ({ schema, typeDefsRelativePath, internalTypes }) {
    super({
      schema,
      internalTypes
    })
    this.typeDefsRelativePath = typeDefsRelativePath
  }

  render (options, prettifyOptions) {
    const code = this.compile`\
    ${this.renderImports()}

    ${this.renderAtLeastOne()}

    ${this.generator === 'typescript' && this.renderMaybe()}

    export interface Exists {\n${this.renderExists()}\n}

    export interface Node {}

    export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable

    export interface Fragmentable {
      $fragment<T>(fragment: string | DocumentNode): Promise<T>
    }

    ${this.exportPrisma ? 'export' : ''} interface ${this.prismaInterface} {
      $exists: Exists;
      $graphql: <T ${
        this.genericsDelimiter
      } any>(query: string, variables?: {[key: string]: any}) => Promise<T>

      /**
       * Queries
      */

    ${this.renderQueries()}

      /**
       * Mutations
      */

    ${this.renderMutations()}


      /**
       * Subscriptions
      */

      $subscribe: Subscription

    }

    export interface Subscription {
    ${this.renderSubscriptions()}
    }

    ${this.renderClientConstructor}

    /**
     * Types
    */

    ${this.renderTypes()}

    /**
     * Model Metadata
    */

    ${this.renderModels()}

    /**
     * Type Defs
    */

    const typeDefs = readFileSync(join(__dirname, '${
      this.typeDefsRelativePath
    }'), 'utf8')

    /**
     * Exports
     */
    ${this.renderExports(options)}
    `
    return this.format(code, prettifyOptions)
  }

  renderImports () {
    return `\
      // Code generated by Prisma. DO NOT EDIT.

      import { join } from 'path'
      import { readFileSync } from 'fs'
      import { DocumentNode } from 'graphql'
      import { makePrismaClientClass, BaseClientOptions, Model } from 'prisma-client-lib'
    `
  }
}
