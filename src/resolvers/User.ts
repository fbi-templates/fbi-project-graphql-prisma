import { UserResolvers } from '../generated/resolver-types'

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers
}
