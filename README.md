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

- [prisma v1](https://github.com/prisma/prisma)
- [apollo-server](https://github.com/apollographql/apollo-server)
- Code generation

## Install

```bash
   $ fbi add https://github.com/fbi-templates/fbi-project-graphql-prisma.git

   # Create a project
   fbi init graphql-prisma -o
```

## Usage

### Database

1. <details>
    <summary>start a database service</summary>
    start a postgres database service:

   ```bash
   docker pull postgres
   docker run -p 5432:5432 --name my-postgres -e POSTGRES_PASSWORD=pgpass -d postgres
   ```

   More info: https://hub.docker.com/_/postgres

   </details>

2. **start database access service**: `npm run db:up`
3. **init database**:

   1. modify `dal/model.graphql`
   2. `npm i -g prisma && npm run db:init`

   > `DOCKER_HOST_IP=docker.for.mac.localhost` in package.json only works on macos.
   >
   > Change `docker.for.mac.localhost` with actual docker IP on other platforms.

4. update datebase: `npm run db:init`

### API service

1. **code generation**:

   1. Generate database schema, database client code and API schema based on database model:

      ```bash
      fbi gd
      ```

   2. Generate type-safe API resolvers:

      ```bash
      fbi ga
      ```

2. **start development server**: `fbi s`

## Tasks

### `gen-db`

- Description: Generate database schema, database client code and API schema based on database model.
- Alias: `gd`
- Examples:
  - `fbi gd`

### `gen-api`

- Description: Generate type-safe API resolvers.
- Alias: `ga`
- Examples:
  - `fbi ga`

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
