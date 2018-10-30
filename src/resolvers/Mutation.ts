import { MutationResolvers } from '../generated/resolver-types'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (root, args, ctx, info) =>
    ctx.db.mutation.createUser({ data: { name: args.name } }, info)
}
