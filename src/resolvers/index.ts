import {
  QueryResolvers,
  MutationResolvers,
  SubscriptionResolvers,
  PostResolvers,
  UserResolvers
} from '../generated/resolver-types'

const Query: QueryResolvers = {
  post: (parent, { where }, ctx, info) => ctx.db.post(where, info),
  posts: (parent, args, ctx, info) => ctx.db.posts(args, info),
  user: (parent, { where }, ctx, info) => ctx.db.user(where, info),
  users: (parent, args, ctx, info) => ctx.db.users(args, info)
}

const Mutation: MutationResolvers = {
  createPost: (parent, { data }, ctx, info) => ctx.db.createPost(data, info),
  updatePost: (parent, args, ctx, info) => ctx.db.updatePost(args, info),
  updateManyPosts: (parent, args, ctx, info) => ctx.db.updateManyPosts(args, info),
  upsertPost: (parent, args, ctx, info) => ctx.db.upsertPost(args, info),
  deletePost: (parent, { where }, ctx, info) => ctx.db.deletePost(where, info),
  deleteManyPosts: (parent, { where }, ctx, info) => ctx.db.deleteManyPosts(where, info),
  createUser: (parent, { data }, ctx, info) => ctx.db.createUser(data, info),
  updateUser: (parent, args, ctx, info) => ctx.db.updateUser(args, info),
  updateManyUsers: (parent, args, ctx, info) => ctx.db.updateManyUsers(args, info),
  upsertUser: (parent, args, ctx, info) => ctx.db.upsertUser(args, info),
  deleteUser: (parent, { where }, ctx, info) => ctx.db.deleteUser(where, info),
  deleteManyUsers: (parent, { where }, ctx, info) => ctx.db.deleteManyUsers(where, info)
}

const Subscription: SubscriptionResolvers = {
  post: {
    subscribe: (parent: any, { where }: any, ctx: any, info: any) =>
      ctx.db.$subscribe.post(where, info).node(),
    resolve: (parent: any, { where }: any, ctx: any, info: any) => ({
      mutation: where.mutation_in[0],
      node: parent
    })
  },
  user: {
    subscribe: (parent: any, { where }: any, ctx: any, info: any) =>
      ctx.db.$subscribe.user(where, info).node(),
    resolve: (parent: any, { where }: any, ctx: any, info: any) => ({
      mutation: where.mutation_in[0],
      node: parent
    })
  }
}

const Post: PostResolvers = {
  author: (parent, args, ctx, info) => ctx.db.post({ id: parent.id }, info).author()
}

const User: UserResolvers = {
  posts: (parent, args, ctx, info) => ctx.db.user({ id: parent.id }, info).posts()
}

export const resolvers = { Query, Mutation, Subscription, Post, User }
