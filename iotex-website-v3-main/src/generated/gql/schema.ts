import { Observable } from 'graphql-typed-client'

export interface query_root {
  /** fetch data from the table: "KV" */
  KV: KV[]
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: KV_aggregate
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: KV | null
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: RewardRecord[]
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: RewardRecord_aggregate
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: RewardRecord | null
  __typename: 'query_root'
}

/** select columns of table "KV" */
export enum KV_select_column {
  /** column name */
  id = 'id',
  /** column name */
  key = 'key',
  /** column name */
  value = 'value',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** columns and relationships of "KV" */
export interface KV {
  id: Int
  key: String
  value: String
  __typename: 'KV'
}

/** aggregated selection of "KV" */
export interface KV_aggregate {
  aggregate: KV_aggregate_fields | null
  nodes: KV[]
  __typename: 'KV_aggregate'
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fields {
  avg: KV_avg_fields | null
  count: Int
  max: KV_max_fields | null
  min: KV_min_fields | null
  stddev: KV_stddev_fields | null
  stddev_pop: KV_stddev_pop_fields | null
  stddev_samp: KV_stddev_samp_fields | null
  sum: KV_sum_fields | null
  var_pop: KV_var_pop_fields | null
  var_samp: KV_var_samp_fields | null
  variance: KV_variance_fields | null
  __typename: 'KV_aggregate_fields'
}

/** aggregate avg on columns */
export interface KV_avg_fields {
  id: Float | null
  __typename: 'KV_avg_fields'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

/** aggregate max on columns */
export interface KV_max_fields {
  id: Int | null
  key: String | null
  value: String | null
  __typename: 'KV_max_fields'
}

/** aggregate min on columns */
export interface KV_min_fields {
  id: Int | null
  key: String | null
  value: String | null
  __typename: 'KV_min_fields'
}

/** aggregate stddev on columns */
export interface KV_stddev_fields {
  id: Float | null
  __typename: 'KV_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fields {
  id: Float | null
  __typename: 'KV_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fields {
  id: Float | null
  __typename: 'KV_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface KV_sum_fields {
  id: Int | null
  __typename: 'KV_sum_fields'
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fields {
  id: Float | null
  __typename: 'KV_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fields {
  id: Float | null
  __typename: 'KV_var_samp_fields'
}

/** aggregate variance on columns */
export interface KV_variance_fields {
  id: Float | null
  __typename: 'KV_variance_fields'
}

/** select columns of table "RewardRecord" */
export enum RewardRecord_select_column {
  /** column name */
  address = 'address',
  /** column name */
  burndropReward = 'burndropReward',
  /** column name */
  date = 'date',
  /** column name */
  id = 'id',
  /** column name */
  stakingReward = 'stakingReward',
}

export type timestamp = any

/** columns and relationships of "RewardRecord" */
export interface RewardRecord {
  address: String
  burndropReward: String | null
  date: timestamp
  id: Int
  stakingReward: String | null
  __typename: 'RewardRecord'
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregate {
  aggregate: RewardRecord_aggregate_fields | null
  nodes: RewardRecord[]
  __typename: 'RewardRecord_aggregate'
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fields {
  avg: RewardRecord_avg_fields | null
  count: Int
  max: RewardRecord_max_fields | null
  min: RewardRecord_min_fields | null
  stddev: RewardRecord_stddev_fields | null
  stddev_pop: RewardRecord_stddev_pop_fields | null
  stddev_samp: RewardRecord_stddev_samp_fields | null
  sum: RewardRecord_sum_fields | null
  var_pop: RewardRecord_var_pop_fields | null
  var_samp: RewardRecord_var_samp_fields | null
  variance: RewardRecord_variance_fields | null
  __typename: 'RewardRecord_aggregate_fields'
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fields {
  id: Float | null
  __typename: 'RewardRecord_avg_fields'
}

/** aggregate max on columns */
export interface RewardRecord_max_fields {
  address: String | null
  burndropReward: String | null
  date: timestamp | null
  id: Int | null
  stakingReward: String | null
  __typename: 'RewardRecord_max_fields'
}

/** aggregate min on columns */
export interface RewardRecord_min_fields {
  address: String | null
  burndropReward: String | null
  date: timestamp | null
  id: Int | null
  stakingReward: String | null
  __typename: 'RewardRecord_min_fields'
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fields {
  id: Float | null
  __typename: 'RewardRecord_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fields {
  id: Float | null
  __typename: 'RewardRecord_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fields {
  id: Float | null
  __typename: 'RewardRecord_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fields {
  id: Int | null
  __typename: 'RewardRecord_sum_fields'
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fields {
  id: Float | null
  __typename: 'RewardRecord_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fields {
  id: Float | null
  __typename: 'RewardRecord_var_samp_fields'
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fields {
  id: Float | null
  __typename: 'RewardRecord_variance_fields'
}

export interface subscription_root {
  /** fetch data from the table: "KV" */
  KV: KV[]
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: KV_aggregate
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: KV | null
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: RewardRecord[]
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: RewardRecord_aggregate
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: RewardRecord | null
  __typename: 'subscription_root'
}

export interface query_rootRequest {
  /** fetch data from the table: "KV" */
  KV?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KVRequest,
      ]
    | KVRequest
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KV_aggregateRequest,
      ]
    | KV_aggregateRequest
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk?: [{ id: Int }, KVRequest]
  /** fetch data from the table: "RewardRecord" */
  RewardRecord?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecordRequest,
      ]
    | RewardRecordRequest
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecord_aggregateRequest,
      ]
    | RewardRecord_aggregateRequest
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk?: [{ id: Int }, RewardRecordRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "KV". */
export interface KV_order_by {
  id?: order_by | null
  key?: order_by | null
  value?: order_by | null
}

/** Boolean expression to filter rows from the table "KV". All fields are combined with a logical 'AND'. */
export interface KV_bool_exp {
  _and?: KV_bool_exp[] | null
  _not?: KV_bool_exp | null
  _or?: KV_bool_exp[] | null
  id?: Int_comparison_exp | null
  key?: String_comparison_exp | null
  value?: String_comparison_exp | null
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Int | null
  _gt?: Int | null
  _gte?: Int | null
  _in?: Int[] | null
  _is_null?: Boolean | null
  _lt?: Int | null
  _lte?: Int | null
  _neq?: Int | null
  _nin?: Int[] | null
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: String | null
  _gt?: String | null
  _gte?: String | null
  /** does the column match the given case-insensitive pattern */
  _ilike?: String | null
  _in?: String[] | null
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: String | null
  _is_null?: Boolean | null
  /** does the column match the given pattern */
  _like?: String | null
  _lt?: String | null
  _lte?: String | null
  _neq?: String | null
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: String | null
  _nin?: String[] | null
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: String | null
  /** does the column NOT match the given pattern */
  _nlike?: String | null
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: String | null
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: String | null
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: String | null
  /** does the column match the given SQL regular expression */
  _similar?: String | null
}

/** columns and relationships of "KV" */
export interface KVRequest {
  id?: boolean | number
  key?: boolean | number
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "KV" */
export interface KV_aggregateRequest {
  aggregate?: KV_aggregate_fieldsRequest
  nodes?: KVRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fieldsRequest {
  avg?: KV_avg_fieldsRequest
  count?: [{ columns?: KV_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: KV_max_fieldsRequest
  min?: KV_min_fieldsRequest
  stddev?: KV_stddev_fieldsRequest
  stddev_pop?: KV_stddev_pop_fieldsRequest
  stddev_samp?: KV_stddev_samp_fieldsRequest
  sum?: KV_sum_fieldsRequest
  var_pop?: KV_var_pop_fieldsRequest
  var_samp?: KV_var_samp_fieldsRequest
  variance?: KV_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface KV_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface KV_max_fieldsRequest {
  id?: boolean | number
  key?: boolean | number
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface KV_min_fieldsRequest {
  id?: boolean | number
  key?: boolean | number
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface KV_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface KV_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface KV_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "RewardRecord". */
export interface RewardRecord_order_by {
  address?: order_by | null
  burndropReward?: order_by | null
  date?: order_by | null
  id?: order_by | null
  stakingReward?: order_by | null
}

/** Boolean expression to filter rows from the table "RewardRecord". All fields are combined with a logical 'AND'. */
export interface RewardRecord_bool_exp {
  _and?: RewardRecord_bool_exp[] | null
  _not?: RewardRecord_bool_exp | null
  _or?: RewardRecord_bool_exp[] | null
  address?: String_comparison_exp | null
  burndropReward?: String_comparison_exp | null
  date?: timestamp_comparison_exp | null
  id?: Int_comparison_exp | null
  stakingReward?: String_comparison_exp | null
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {
  _eq?: timestamp | null
  _gt?: timestamp | null
  _gte?: timestamp | null
  _in?: timestamp[] | null
  _is_null?: Boolean | null
  _lt?: timestamp | null
  _lte?: timestamp | null
  _neq?: timestamp | null
  _nin?: timestamp[] | null
}

/** columns and relationships of "RewardRecord" */
export interface RewardRecordRequest {
  address?: boolean | number
  burndropReward?: boolean | number
  date?: boolean | number
  id?: boolean | number
  stakingReward?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregateRequest {
  aggregate?: RewardRecord_aggregate_fieldsRequest
  nodes?: RewardRecordRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fieldsRequest {
  avg?: RewardRecord_avg_fieldsRequest
  count?: [{ columns?: RewardRecord_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: RewardRecord_max_fieldsRequest
  min?: RewardRecord_min_fieldsRequest
  stddev?: RewardRecord_stddev_fieldsRequest
  stddev_pop?: RewardRecord_stddev_pop_fieldsRequest
  stddev_samp?: RewardRecord_stddev_samp_fieldsRequest
  sum?: RewardRecord_sum_fieldsRequest
  var_pop?: RewardRecord_var_pop_fieldsRequest
  var_samp?: RewardRecord_var_samp_fieldsRequest
  variance?: RewardRecord_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface RewardRecord_max_fieldsRequest {
  address?: boolean | number
  burndropReward?: boolean | number
  date?: boolean | number
  id?: boolean | number
  stakingReward?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface RewardRecord_min_fieldsRequest {
  address?: boolean | number
  burndropReward?: boolean | number
  date?: boolean | number
  id?: boolean | number
  stakingReward?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface subscription_rootRequest {
  /** fetch data from the table: "KV" */
  KV?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KVRequest,
      ]
    | KVRequest
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KV_aggregateRequest,
      ]
    | KV_aggregateRequest
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk?: [{ id: Int }, KVRequest]
  /** fetch data from the table: "RewardRecord" */
  RewardRecord?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecordRequest,
      ]
    | RewardRecordRequest
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecord_aggregateRequest,
      ]
    | RewardRecord_aggregateRequest
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk?: [{ id: Int }, RewardRecordRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj: { __typename: String }): obj is query_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return query_root_possibleTypes.includes(obj.__typename)
}

const KV_possibleTypes = ['KV']
export const isKV = (obj: { __typename: String }): obj is KV => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_possibleTypes.includes(obj.__typename)
}

const KV_aggregate_possibleTypes = ['KV_aggregate']
export const isKV_aggregate = (obj: { __typename: String }): obj is KV_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_aggregate_possibleTypes.includes(obj.__typename)
}

const KV_aggregate_fields_possibleTypes = ['KV_aggregate_fields']
export const isKV_aggregate_fields = (obj: { __typename: String }): obj is KV_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const KV_avg_fields_possibleTypes = ['KV_avg_fields']
export const isKV_avg_fields = (obj: { __typename: String }): obj is KV_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_avg_fields_possibleTypes.includes(obj.__typename)
}

const KV_max_fields_possibleTypes = ['KV_max_fields']
export const isKV_max_fields = (obj: { __typename: String }): obj is KV_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_max_fields_possibleTypes.includes(obj.__typename)
}

const KV_min_fields_possibleTypes = ['KV_min_fields']
export const isKV_min_fields = (obj: { __typename: String }): obj is KV_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_min_fields_possibleTypes.includes(obj.__typename)
}

const KV_stddev_fields_possibleTypes = ['KV_stddev_fields']
export const isKV_stddev_fields = (obj: { __typename: String }): obj is KV_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_stddev_fields_possibleTypes.includes(obj.__typename)
}

const KV_stddev_pop_fields_possibleTypes = ['KV_stddev_pop_fields']
export const isKV_stddev_pop_fields = (obj: { __typename: String }): obj is KV_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const KV_stddev_samp_fields_possibleTypes = ['KV_stddev_samp_fields']
export const isKV_stddev_samp_fields = (obj: { __typename: String }): obj is KV_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const KV_sum_fields_possibleTypes = ['KV_sum_fields']
export const isKV_sum_fields = (obj: { __typename: String }): obj is KV_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_sum_fields_possibleTypes.includes(obj.__typename)
}

const KV_var_pop_fields_possibleTypes = ['KV_var_pop_fields']
export const isKV_var_pop_fields = (obj: { __typename: String }): obj is KV_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const KV_var_samp_fields_possibleTypes = ['KV_var_samp_fields']
export const isKV_var_samp_fields = (obj: { __typename: String }): obj is KV_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const KV_variance_fields_possibleTypes = ['KV_variance_fields']
export const isKV_variance_fields = (obj: { __typename: String }): obj is KV_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_variance_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_possibleTypes = ['RewardRecord']
export const isRewardRecord = (obj: { __typename: String }): obj is RewardRecord => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_possibleTypes.includes(obj.__typename)
}

const RewardRecord_aggregate_possibleTypes = ['RewardRecord_aggregate']
export const isRewardRecord_aggregate = (obj: { __typename: String }): obj is RewardRecord_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_aggregate_possibleTypes.includes(obj.__typename)
}

const RewardRecord_aggregate_fields_possibleTypes = ['RewardRecord_aggregate_fields']
export const isRewardRecord_aggregate_fields = (obj: { __typename: String }): obj is RewardRecord_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_avg_fields_possibleTypes = ['RewardRecord_avg_fields']
export const isRewardRecord_avg_fields = (obj: { __typename: String }): obj is RewardRecord_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_avg_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_max_fields_possibleTypes = ['RewardRecord_max_fields']
export const isRewardRecord_max_fields = (obj: { __typename: String }): obj is RewardRecord_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_max_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_min_fields_possibleTypes = ['RewardRecord_min_fields']
export const isRewardRecord_min_fields = (obj: { __typename: String }): obj is RewardRecord_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_min_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_stddev_fields_possibleTypes = ['RewardRecord_stddev_fields']
export const isRewardRecord_stddev_fields = (obj: { __typename: String }): obj is RewardRecord_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_stddev_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_stddev_pop_fields_possibleTypes = ['RewardRecord_stddev_pop_fields']
export const isRewardRecord_stddev_pop_fields = (obj: { __typename: String }): obj is RewardRecord_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_stddev_samp_fields_possibleTypes = ['RewardRecord_stddev_samp_fields']
export const isRewardRecord_stddev_samp_fields = (obj: { __typename: String }): obj is RewardRecord_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_sum_fields_possibleTypes = ['RewardRecord_sum_fields']
export const isRewardRecord_sum_fields = (obj: { __typename: String }): obj is RewardRecord_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_sum_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_var_pop_fields_possibleTypes = ['RewardRecord_var_pop_fields']
export const isRewardRecord_var_pop_fields = (obj: { __typename: String }): obj is RewardRecord_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_var_samp_fields_possibleTypes = ['RewardRecord_var_samp_fields']
export const isRewardRecord_var_samp_fields = (obj: { __typename: String }): obj is RewardRecord_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_variance_fields_possibleTypes = ['RewardRecord_variance_fields']
export const isRewardRecord_variance_fields = (obj: { __typename: String }): obj is RewardRecord_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_variance_fields_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj: { __typename: String }): obj is subscription_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

export interface query_rootPromiseChain {
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregatePromiseChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
  }) &
    (KV_aggregatePromiseChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVPromiseChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Promise<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregatePromiseChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Promise<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregatePromiseChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Promise<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordPromiseChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Promise<RewardRecord | null>
  }
}

export interface query_rootObservableChain {
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregateObservableChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
  }) &
    (KV_aggregateObservableChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVObservableChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Observable<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregateObservableChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Observable<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregateObservableChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Observable<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordObservableChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Observable<RewardRecord | null>
  }
}

/** columns and relationships of "KV" */
export interface KVPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  key: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  value: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** columns and relationships of "KV" */
export interface KVObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  key: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  value: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** aggregated selection of "KV" */
export interface KV_aggregatePromiseChain {
  aggregate: KV_aggregate_fieldsPromiseChain & {
    execute: (
      request: KV_aggregate_fieldsRequest,
      defaultValue?: KV_aggregate_fields | null,
    ) => Promise<KV_aggregate_fields | null>
  }
  nodes: { execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]> }
}

/** aggregated selection of "KV" */
export interface KV_aggregateObservableChain {
  aggregate: KV_aggregate_fieldsObservableChain & {
    execute: (
      request: KV_aggregate_fieldsRequest,
      defaultValue?: KV_aggregate_fields | null,
    ) => Observable<KV_aggregate_fields | null>
  }
  nodes: { execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]> }
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fieldsPromiseChain {
  avg: KV_avg_fieldsPromiseChain & {
    execute: (request: KV_avg_fieldsRequest, defaultValue?: KV_avg_fields | null) => Promise<KV_avg_fields | null>
  }
  count: ((args?: {
    columns?: KV_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  max: KV_max_fieldsPromiseChain & {
    execute: (request: KV_max_fieldsRequest, defaultValue?: KV_max_fields | null) => Promise<KV_max_fields | null>
  }
  min: KV_min_fieldsPromiseChain & {
    execute: (request: KV_min_fieldsRequest, defaultValue?: KV_min_fields | null) => Promise<KV_min_fields | null>
  }
  stddev: KV_stddev_fieldsPromiseChain & {
    execute: (request: KV_stddev_fieldsRequest, defaultValue?: KV_stddev_fields | null) => Promise<KV_stddev_fields | null>
  }
  stddev_pop: KV_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: KV_stddev_pop_fieldsRequest,
      defaultValue?: KV_stddev_pop_fields | null,
    ) => Promise<KV_stddev_pop_fields | null>
  }
  stddev_samp: KV_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: KV_stddev_samp_fieldsRequest,
      defaultValue?: KV_stddev_samp_fields | null,
    ) => Promise<KV_stddev_samp_fields | null>
  }
  sum: KV_sum_fieldsPromiseChain & {
    execute: (request: KV_sum_fieldsRequest, defaultValue?: KV_sum_fields | null) => Promise<KV_sum_fields | null>
  }
  var_pop: KV_var_pop_fieldsPromiseChain & {
    execute: (
      request: KV_var_pop_fieldsRequest,
      defaultValue?: KV_var_pop_fields | null,
    ) => Promise<KV_var_pop_fields | null>
  }
  var_samp: KV_var_samp_fieldsPromiseChain & {
    execute: (
      request: KV_var_samp_fieldsRequest,
      defaultValue?: KV_var_samp_fields | null,
    ) => Promise<KV_var_samp_fields | null>
  }
  variance: KV_variance_fieldsPromiseChain & {
    execute: (
      request: KV_variance_fieldsRequest,
      defaultValue?: KV_variance_fields | null,
    ) => Promise<KV_variance_fields | null>
  }
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fieldsObservableChain {
  avg: KV_avg_fieldsObservableChain & {
    execute: (request: KV_avg_fieldsRequest, defaultValue?: KV_avg_fields | null) => Observable<KV_avg_fields | null>
  }
  count: ((args?: {
    columns?: KV_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  max: KV_max_fieldsObservableChain & {
    execute: (request: KV_max_fieldsRequest, defaultValue?: KV_max_fields | null) => Observable<KV_max_fields | null>
  }
  min: KV_min_fieldsObservableChain & {
    execute: (request: KV_min_fieldsRequest, defaultValue?: KV_min_fields | null) => Observable<KV_min_fields | null>
  }
  stddev: KV_stddev_fieldsObservableChain & {
    execute: (
      request: KV_stddev_fieldsRequest,
      defaultValue?: KV_stddev_fields | null,
    ) => Observable<KV_stddev_fields | null>
  }
  stddev_pop: KV_stddev_pop_fieldsObservableChain & {
    execute: (
      request: KV_stddev_pop_fieldsRequest,
      defaultValue?: KV_stddev_pop_fields | null,
    ) => Observable<KV_stddev_pop_fields | null>
  }
  stddev_samp: KV_stddev_samp_fieldsObservableChain & {
    execute: (
      request: KV_stddev_samp_fieldsRequest,
      defaultValue?: KV_stddev_samp_fields | null,
    ) => Observable<KV_stddev_samp_fields | null>
  }
  sum: KV_sum_fieldsObservableChain & {
    execute: (request: KV_sum_fieldsRequest, defaultValue?: KV_sum_fields | null) => Observable<KV_sum_fields | null>
  }
  var_pop: KV_var_pop_fieldsObservableChain & {
    execute: (
      request: KV_var_pop_fieldsRequest,
      defaultValue?: KV_var_pop_fields | null,
    ) => Observable<KV_var_pop_fields | null>
  }
  var_samp: KV_var_samp_fieldsObservableChain & {
    execute: (
      request: KV_var_samp_fieldsRequest,
      defaultValue?: KV_var_samp_fields | null,
    ) => Observable<KV_var_samp_fields | null>
  }
  variance: KV_variance_fieldsObservableChain & {
    execute: (
      request: KV_variance_fieldsRequest,
      defaultValue?: KV_variance_fields | null,
    ) => Observable<KV_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface KV_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface KV_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface KV_max_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface KV_max_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface KV_min_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface KV_min_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface KV_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface KV_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface KV_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface KV_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface KV_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface KV_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** columns and relationships of "RewardRecord" */
export interface RewardRecordPromiseChain {
  address: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  burndropReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp) => Promise<timestamp> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  stakingReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** columns and relationships of "RewardRecord" */
export interface RewardRecordObservableChain {
  address: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  burndropReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp) => Observable<timestamp> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  stakingReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregatePromiseChain {
  aggregate: RewardRecord_aggregate_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_aggregate_fieldsRequest,
      defaultValue?: RewardRecord_aggregate_fields | null,
    ) => Promise<RewardRecord_aggregate_fields | null>
  }
  nodes: { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]> }
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregateObservableChain {
  aggregate: RewardRecord_aggregate_fieldsObservableChain & {
    execute: (
      request: RewardRecord_aggregate_fieldsRequest,
      defaultValue?: RewardRecord_aggregate_fields | null,
    ) => Observable<RewardRecord_aggregate_fields | null>
  }
  nodes: { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]> }
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fieldsPromiseChain {
  avg: RewardRecord_avg_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_avg_fieldsRequest,
      defaultValue?: RewardRecord_avg_fields | null,
    ) => Promise<RewardRecord_avg_fields | null>
  }
  count: ((args?: {
    columns?: RewardRecord_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  max: RewardRecord_max_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_max_fieldsRequest,
      defaultValue?: RewardRecord_max_fields | null,
    ) => Promise<RewardRecord_max_fields | null>
  }
  min: RewardRecord_min_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_min_fieldsRequest,
      defaultValue?: RewardRecord_min_fields | null,
    ) => Promise<RewardRecord_min_fields | null>
  }
  stddev: RewardRecord_stddev_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_stddev_fieldsRequest,
      defaultValue?: RewardRecord_stddev_fields | null,
    ) => Promise<RewardRecord_stddev_fields | null>
  }
  stddev_pop: RewardRecord_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_stddev_pop_fieldsRequest,
      defaultValue?: RewardRecord_stddev_pop_fields | null,
    ) => Promise<RewardRecord_stddev_pop_fields | null>
  }
  stddev_samp: RewardRecord_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_stddev_samp_fieldsRequest,
      defaultValue?: RewardRecord_stddev_samp_fields | null,
    ) => Promise<RewardRecord_stddev_samp_fields | null>
  }
  sum: RewardRecord_sum_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_sum_fieldsRequest,
      defaultValue?: RewardRecord_sum_fields | null,
    ) => Promise<RewardRecord_sum_fields | null>
  }
  var_pop: RewardRecord_var_pop_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_var_pop_fieldsRequest,
      defaultValue?: RewardRecord_var_pop_fields | null,
    ) => Promise<RewardRecord_var_pop_fields | null>
  }
  var_samp: RewardRecord_var_samp_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_var_samp_fieldsRequest,
      defaultValue?: RewardRecord_var_samp_fields | null,
    ) => Promise<RewardRecord_var_samp_fields | null>
  }
  variance: RewardRecord_variance_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_variance_fieldsRequest,
      defaultValue?: RewardRecord_variance_fields | null,
    ) => Promise<RewardRecord_variance_fields | null>
  }
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fieldsObservableChain {
  avg: RewardRecord_avg_fieldsObservableChain & {
    execute: (
      request: RewardRecord_avg_fieldsRequest,
      defaultValue?: RewardRecord_avg_fields | null,
    ) => Observable<RewardRecord_avg_fields | null>
  }
  count: ((args?: {
    columns?: RewardRecord_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  max: RewardRecord_max_fieldsObservableChain & {
    execute: (
      request: RewardRecord_max_fieldsRequest,
      defaultValue?: RewardRecord_max_fields | null,
    ) => Observable<RewardRecord_max_fields | null>
  }
  min: RewardRecord_min_fieldsObservableChain & {
    execute: (
      request: RewardRecord_min_fieldsRequest,
      defaultValue?: RewardRecord_min_fields | null,
    ) => Observable<RewardRecord_min_fields | null>
  }
  stddev: RewardRecord_stddev_fieldsObservableChain & {
    execute: (
      request: RewardRecord_stddev_fieldsRequest,
      defaultValue?: RewardRecord_stddev_fields | null,
    ) => Observable<RewardRecord_stddev_fields | null>
  }
  stddev_pop: RewardRecord_stddev_pop_fieldsObservableChain & {
    execute: (
      request: RewardRecord_stddev_pop_fieldsRequest,
      defaultValue?: RewardRecord_stddev_pop_fields | null,
    ) => Observable<RewardRecord_stddev_pop_fields | null>
  }
  stddev_samp: RewardRecord_stddev_samp_fieldsObservableChain & {
    execute: (
      request: RewardRecord_stddev_samp_fieldsRequest,
      defaultValue?: RewardRecord_stddev_samp_fields | null,
    ) => Observable<RewardRecord_stddev_samp_fields | null>
  }
  sum: RewardRecord_sum_fieldsObservableChain & {
    execute: (
      request: RewardRecord_sum_fieldsRequest,
      defaultValue?: RewardRecord_sum_fields | null,
    ) => Observable<RewardRecord_sum_fields | null>
  }
  var_pop: RewardRecord_var_pop_fieldsObservableChain & {
    execute: (
      request: RewardRecord_var_pop_fieldsRequest,
      defaultValue?: RewardRecord_var_pop_fields | null,
    ) => Observable<RewardRecord_var_pop_fields | null>
  }
  var_samp: RewardRecord_var_samp_fieldsObservableChain & {
    execute: (
      request: RewardRecord_var_samp_fieldsRequest,
      defaultValue?: RewardRecord_var_samp_fields | null,
    ) => Observable<RewardRecord_var_samp_fields | null>
  }
  variance: RewardRecord_variance_fieldsObservableChain & {
    execute: (
      request: RewardRecord_variance_fieldsRequest,
      defaultValue?: RewardRecord_variance_fields | null,
    ) => Observable<RewardRecord_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface RewardRecord_max_fieldsPromiseChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  burndropReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  stakingReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface RewardRecord_max_fieldsObservableChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  burndropReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  stakingReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface RewardRecord_min_fieldsPromiseChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  burndropReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  stakingReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface RewardRecord_min_fieldsObservableChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  burndropReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  stakingReward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

export interface subscription_rootPromiseChain {
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregatePromiseChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
  }) &
    (KV_aggregatePromiseChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVPromiseChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Promise<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregatePromiseChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Promise<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregatePromiseChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Promise<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordPromiseChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Promise<RewardRecord | null>
  }
}

export interface subscription_rootObservableChain {
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregateObservableChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
  }) &
    (KV_aggregateObservableChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVObservableChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Observable<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregateObservableChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Observable<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregateObservableChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Observable<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordObservableChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Observable<RewardRecord | null>
  }
}
