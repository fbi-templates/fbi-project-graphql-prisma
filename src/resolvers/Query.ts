import { QueryResolvers } from '../generated/resolver-types'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  users: (parent, args, ctx, info) => ctx.db.query.users({}, info)
}
