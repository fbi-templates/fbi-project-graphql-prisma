import { Resolvers } from '../generated/resolver-types'

import { Query } from './Query'
import { Mutation } from './Mutation'
import { User } from './User'

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User
}
