# fbi-project-graphql-prisma

GraphQL API Server and Prisma ORM project template

> This is a fbi project template. If you haven't installed
> [fbi](https://github.com/AlloyTeam/fbi) yet, use the following command to
> install.
>
> `$ npm i -g fbi` or `yarn global add fbi`

## Requirements

- `fbi v3.0+`
- `node v7.6+`

## Features

- [prisma](https://www.prisma.io/)
- [graphql-yoga](https://github.com/prisma/graphql-yoga)
- Code generation

## Install

```bash
   $ fbi add https://github.com/fbi-templates/fbi-project-graphql-prisma.git

   # Create a project
   fbi init graphql-prisma -o
```

## Usage

### Data access service

1. **init database**: start a postgres/mysql database service
1. **prisma configs**: `./prisma/`
1. **start prisma service**: `npm run prisma:up`
1. **install prisma**: `npm i -g prisma`
1. **deploy datamodel**: `cd prisma && prisma deploy`
   > Run `prisma deploy` when `prisma/datamodel.prisma` changed

### Graphql API service

1. **Start development server**

   ```bash
   $ fbi s
   ```

1. Run `fbi g` when `prisma/datamodel.prisma` or `src/schema` changed

## Tasks

### `generate`

- Description: Generate 'prisma.graphql', 'prisma binding', 'schema types' and 'resolvers' base on schema, config: `fbi/options.js generate`.
- Alias: `g`
- Examples:
  - `fbi g`

### `serve`

- Description: Start development server.
- Alias: `s`
- Examples:
  - `fbi s`

### `build`

- Description: Build the project for the specified environment.
- Params:
  - `p/prod` `{Boolean}` (default) Production environment.
  - `t/test` `{Boolean}` Test environment.
- Alias: `b`
- Examples:
  - `fbi b -t`
  - `fbi b -p`

## More

- [Official templates](https://github.com/fbi-templates)
- [fbi documentation](https://neikvon.gitbooks.io/fbi/content/)

## License

[MIT](https://opensource.org/licenses/MIT)

## [Changelog](./CHANGELOG.md)
