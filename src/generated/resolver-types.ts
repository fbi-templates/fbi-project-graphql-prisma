import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Long: any,
};

export type AggregatePost = {
   __typename?: 'AggregatePost',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export enum GenderEnum {
  Male = 'MALE',
  Female = 'FEMALE'
}


export type Mutation = {
   __typename?: 'Mutation',
  createPost: Post,
  updatePost?: Maybe<Post>,
  updateManyPosts: BatchPayload,
  upsertPost: Post,
  deletePost?: Maybe<Post>,
  deleteManyPosts: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
};


export type MutationCreatePostArgs = {
  data: PostCreateInput
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput,
  where: PostWhereUniqueInput
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyMutationInput,
  where?: Maybe<PostWhereInput>
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput,
  create: PostCreateInput,
  update: PostUpdateInput
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostWhereInput>
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  author: User,
};

export type PostConnection = {
   __typename?: 'PostConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PostEdge>>,
  aggregate: AggregatePost,
};

export type PostCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  author: UserCreateOneWithoutPostsInput,
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type PostEdge = {
   __typename?: 'PostEdge',
  node: Post,
  cursor: Scalars['String'],
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PostPreviousValues = {
   __typename?: 'PostPreviousValues',
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
};

export type PostScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<PostScalarWhereInput>>,
  OR?: Maybe<Array<PostScalarWhereInput>>,
  NOT?: Maybe<Array<PostScalarWhereInput>>,
};

export type PostSubscriptionPayload = {
   __typename?: 'PostSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Post>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PostPreviousValues>,
};

export type PostSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PostWhereInput>,
  AND?: Maybe<Array<PostSubscriptionWhereInput>>,
  OR?: Maybe<Array<PostSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PostSubscriptionWhereInput>>,
};

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>,
};

export type PostUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
};

export type PostUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  delete?: Maybe<Array<PostWhereUniqueInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
  set?: Maybe<Array<PostWhereUniqueInput>>,
  disconnect?: Maybe<Array<PostWhereUniqueInput>>,
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>,
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>,
  deleteMany?: Maybe<Array<PostScalarWhereInput>>,
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>,
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput,
  data: PostUpdateManyDataInput,
};

export type PostUpdateWithoutAuthorDataInput = {
  title?: Maybe<Scalars['String']>,
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput,
  data: PostUpdateWithoutAuthorDataInput,
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput,
  update: PostUpdateWithoutAuthorDataInput,
  create: PostCreateWithoutAuthorInput,
};

export type PostWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  author?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<PostWhereInput>>,
  OR?: Maybe<Array<PostWhereInput>>,
  NOT?: Maybe<Array<PostWhereInput>>,
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  post?: Maybe<Post>,
  posts: Array<Maybe<Post>>,
  postsConnection: PostConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  node?: Maybe<Node>,
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>,
  orderBy?: Maybe<PostOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>,
  orderBy?: Maybe<PostOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  post?: Maybe<PostSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionPostArgs = {
  where?: Maybe<PostSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  gender: GenderEnum,
  posts?: Maybe<Array<Post>>,
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>,
  orderBy?: Maybe<PostOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  gender: GenderEnum,
  posts?: Maybe<PostCreateManyWithoutAuthorInput>,
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  gender: GenderEnum,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  gender: GenderEnum,
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  gender?: Maybe<GenderEnum>,
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>,
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  gender?: Maybe<GenderEnum>,
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  update?: Maybe<UserUpdateWithoutPostsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateWithoutPostsDataInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  gender?: Maybe<GenderEnum>,
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput,
  create: UserCreateWithoutPostsInput,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  gender?: Maybe<GenderEnum>,
  gender_not?: Maybe<GenderEnum>,
  gender_in?: Maybe<Array<GenderEnum>>,
  gender_not_in?: Maybe<Array<GenderEnum>>,
  posts_every?: Maybe<PostWhereInput>,
  posts_some?: Maybe<PostWhereInput>,
  posts_none?: Maybe<PostWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  PostWhereUniqueInput: PostWhereUniqueInput,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Post: ResolverTypeWrapper<Post>,
  User: ResolverTypeWrapper<User>,
  GenderEnum: GenderEnum,
  PostWhereInput: PostWhereInput,
  UserWhereInput: UserWhereInput,
  PostOrderByInput: PostOrderByInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  PostConnection: ResolverTypeWrapper<PostConnection>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  PostEdge: ResolverTypeWrapper<PostEdge>,
  AggregatePost: ResolverTypeWrapper<AggregatePost>,
  UserWhereUniqueInput: UserWhereUniqueInput,
  UserOrderByInput: UserOrderByInput,
  UserConnection: ResolverTypeWrapper<UserConnection>,
  UserEdge: ResolverTypeWrapper<UserEdge>,
  AggregateUser: ResolverTypeWrapper<AggregateUser>,
  Node: ResolverTypeWrapper<Node>,
  Mutation: ResolverTypeWrapper<{}>,
  PostCreateInput: PostCreateInput,
  UserCreateOneWithoutPostsInput: UserCreateOneWithoutPostsInput,
  UserCreateWithoutPostsInput: UserCreateWithoutPostsInput,
  PostUpdateInput: PostUpdateInput,
  UserUpdateOneRequiredWithoutPostsInput: UserUpdateOneRequiredWithoutPostsInput,
  UserUpdateWithoutPostsDataInput: UserUpdateWithoutPostsDataInput,
  UserUpsertWithoutPostsInput: UserUpsertWithoutPostsInput,
  PostUpdateManyMutationInput: PostUpdateManyMutationInput,
  BatchPayload: ResolverTypeWrapper<BatchPayload>,
  Long: ResolverTypeWrapper<Scalars['Long']>,
  UserCreateInput: UserCreateInput,
  PostCreateManyWithoutAuthorInput: PostCreateManyWithoutAuthorInput,
  PostCreateWithoutAuthorInput: PostCreateWithoutAuthorInput,
  UserUpdateInput: UserUpdateInput,
  PostUpdateManyWithoutAuthorInput: PostUpdateManyWithoutAuthorInput,
  PostUpdateWithWhereUniqueWithoutAuthorInput: PostUpdateWithWhereUniqueWithoutAuthorInput,
  PostUpdateWithoutAuthorDataInput: PostUpdateWithoutAuthorDataInput,
  PostUpsertWithWhereUniqueWithoutAuthorInput: PostUpsertWithWhereUniqueWithoutAuthorInput,
  PostScalarWhereInput: PostScalarWhereInput,
  PostUpdateManyWithWhereNestedInput: PostUpdateManyWithWhereNestedInput,
  PostUpdateManyDataInput: PostUpdateManyDataInput,
  UserUpdateManyMutationInput: UserUpdateManyMutationInput,
  Subscription: ResolverTypeWrapper<{}>,
  PostSubscriptionWhereInput: PostSubscriptionWhereInput,
  MutationType: MutationType,
  PostSubscriptionPayload: ResolverTypeWrapper<PostSubscriptionPayload>,
  PostPreviousValues: ResolverTypeWrapper<PostPreviousValues>,
  UserSubscriptionWhereInput: UserSubscriptionWhereInput,
  UserSubscriptionPayload: ResolverTypeWrapper<UserSubscriptionPayload>,
  UserPreviousValues: ResolverTypeWrapper<UserPreviousValues>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  PostWhereUniqueInput: PostWhereUniqueInput,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Post: Post,
  User: User,
  GenderEnum: GenderEnum,
  PostWhereInput: PostWhereInput,
  UserWhereInput: UserWhereInput,
  PostOrderByInput: PostOrderByInput,
  Int: Scalars['Int'],
  PostConnection: PostConnection,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  PostEdge: PostEdge,
  AggregatePost: AggregatePost,
  UserWhereUniqueInput: UserWhereUniqueInput,
  UserOrderByInput: UserOrderByInput,
  UserConnection: UserConnection,
  UserEdge: UserEdge,
  AggregateUser: AggregateUser,
  Node: Node,
  Mutation: {},
  PostCreateInput: PostCreateInput,
  UserCreateOneWithoutPostsInput: UserCreateOneWithoutPostsInput,
  UserCreateWithoutPostsInput: UserCreateWithoutPostsInput,
  PostUpdateInput: PostUpdateInput,
  UserUpdateOneRequiredWithoutPostsInput: UserUpdateOneRequiredWithoutPostsInput,
  UserUpdateWithoutPostsDataInput: UserUpdateWithoutPostsDataInput,
  UserUpsertWithoutPostsInput: UserUpsertWithoutPostsInput,
  PostUpdateManyMutationInput: PostUpdateManyMutationInput,
  BatchPayload: BatchPayload,
  Long: Scalars['Long'],
  UserCreateInput: UserCreateInput,
  PostCreateManyWithoutAuthorInput: PostCreateManyWithoutAuthorInput,
  PostCreateWithoutAuthorInput: PostCreateWithoutAuthorInput,
  UserUpdateInput: UserUpdateInput,
  PostUpdateManyWithoutAuthorInput: PostUpdateManyWithoutAuthorInput,
  PostUpdateWithWhereUniqueWithoutAuthorInput: PostUpdateWithWhereUniqueWithoutAuthorInput,
  PostUpdateWithoutAuthorDataInput: PostUpdateWithoutAuthorDataInput,
  PostUpsertWithWhereUniqueWithoutAuthorInput: PostUpsertWithWhereUniqueWithoutAuthorInput,
  PostScalarWhereInput: PostScalarWhereInput,
  PostUpdateManyWithWhereNestedInput: PostUpdateManyWithWhereNestedInput,
  PostUpdateManyDataInput: PostUpdateManyDataInput,
  UserUpdateManyMutationInput: UserUpdateManyMutationInput,
  Subscription: {},
  PostSubscriptionWhereInput: PostSubscriptionWhereInput,
  MutationType: MutationType,
  PostSubscriptionPayload: PostSubscriptionPayload,
  PostPreviousValues: PostPreviousValues,
  UserSubscriptionWhereInput: UserSubscriptionWhereInput,
  UserSubscriptionPayload: UserSubscriptionPayload,
  UserPreviousValues: UserPreviousValues,
};

export type AggregatePostResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePost'] = ResolversParentTypes['AggregatePost']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AggregateUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>,
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'data'>>,
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'data' | 'where'>>,
  updateManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPostsArgs, 'data'>>,
  upsertPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpsertPostArgs, 'where' | 'create' | 'update'>>,
  deletePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'where'>>,
  deleteManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyPostsArgs>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>,
  updateManyUsers?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyUsersArgs, 'data'>>,
  upsertUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpsertUserArgs, 'where' | 'create' | 'update'>>,
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>,
  deleteManyUsers?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, MutationDeleteManyUsersArgs>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type PostConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostConnection'] = ResolversParentTypes['PostConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['PostEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregatePost'], ParentType, ContextType>,
};

export type PostEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostEdge'] = ResolversParentTypes['PostEdge']> = {
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PostPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostPreviousValues'] = ResolversParentTypes['PostPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PostSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSubscriptionPayload'] = ResolversParentTypes['PostSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PostPreviousValues']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'where'>>,
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, QueryPostsArgs>,
  postsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, QueryPostsConnectionArgs>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>,
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, QueryUsersArgs>,
  usersConnection?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, QueryUsersConnectionArgs>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  post?: SubscriptionResolver<Maybe<ResolversTypes['PostSubscriptionPayload']>, "post", ParentType, ContextType, SubscriptionPostArgs>,
  user?: SubscriptionResolver<Maybe<ResolversTypes['UserSubscriptionPayload']>, "user", ParentType, ContextType, SubscriptionUserArgs>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gender?: Resolver<ResolversTypes['GenderEnum'], ParentType, ContextType>,
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType, UserPostsArgs>,
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['UserEdge']>>, ParentType, ContextType>,
  aggregate?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType>,
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type UserPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreviousValues'] = ResolversParentTypes['UserPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gender?: Resolver<ResolversTypes['GenderEnum'], ParentType, ContextType>,
};

export type UserSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSubscriptionPayload'] = ResolversParentTypes['UserSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['MutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['UserPreviousValues']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AggregatePost?: AggregatePostResolvers<ContextType>,
  AggregateUser?: AggregateUserResolvers<ContextType>,
  BatchPayload?: BatchPayloadResolvers<ContextType>,
  Long?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  PageInfo?: PageInfoResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  PostConnection?: PostConnectionResolvers<ContextType>,
  PostEdge?: PostEdgeResolvers<ContextType>,
  PostPreviousValues?: PostPreviousValuesResolvers<ContextType>,
  PostSubscriptionPayload?: PostSubscriptionPayloadResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserConnection?: UserConnectionResolvers<ContextType>,
  UserEdge?: UserEdgeResolvers<ContextType>,
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>,
  UserSubscriptionPayload?: UserSubscriptionPayloadResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
