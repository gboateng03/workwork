import { request } from 'graphql-request';
import { createClient, linkTypeMap, Client } from 'graphql-typed-client';
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from '../generated/gql/schema';
import typeJSON from '../generated/gql/typeMap.json';
import { publicConfig } from '../config/public';

//@ts-ignore
const typeMap = linkTypeMap(typeJSON);
export const subgraphAPI: Client<
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  never,
  never,
  never,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root> = createClient({
    queryRoot: typeMap.query_root,
    subscriptionRoot: typeMap.Subscription,
    fetcher: ({ query, variables }) => request(publicConfig.graphAPIURL, query, variables).then(data => ({ data }))
  });
