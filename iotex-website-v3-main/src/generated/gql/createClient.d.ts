import { Client, ClientOptions } from 'graphql-typed-client'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (
  options: ClientOptions,
) => Client<
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  never,
  never,
  never,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root
>
