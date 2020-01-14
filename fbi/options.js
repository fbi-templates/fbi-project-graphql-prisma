module.exports = {
  tslint: true,

  generate: {
    db: {
      modelInput: 'dal/model.graphql',
      modelOutput: 'src/generated/db.graphql',
      clientOutput: 'src/generated/db.ts',
      prismaYml: 'dal/prisma.yml'
    },
    api: {
      schemaInput: './src/schema/**/*.graphql',
      schemaOutput: './src/schema/schema.graphql',
      resolverTypesOutput: './src/generated/resolver-types.ts',
      resolversOutput: './src/resolvers',
      cover: false,
      resolverIgnore: [
        'PageInfo',
        'node',
        'Aggregate*',
        '*Payload',
        '*Edge',
        '*PreviousValues'
      ]
    },
    prettifyOptions: {
      semi: false,
      singleQuote: true,
      trailingComma: 'none',
      parser: 'babel',
      proseWrap: 'never',
      printWidth: 100
    }
  },

  nodemon: {
    ext: 'ts graphql',
    verbose: true,
    ignore: ['node_modules', 'test', 'fbi', '.git'],
    watch: ['src/**/*.ts', 'src/**/*.graphql'],
    inspect: true
  },

  build: {
    ignore: ['./resolvers-tmp']
  },

  // file or directories to copy (Destination: 'dist')
  copy: {
    ignore: ['**/*.{js,ts}', '.DS_Store', 'configs/pm2-*.json', 'types/**/*'],
    'package.json': true,
    node_modules: false,
    dal: 'dal'
  }
}
