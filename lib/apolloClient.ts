import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const isBrowser = typeof window === "undefined";

function createApolloClient() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPosts: concatPagination(),
        },
      },
    },
  });

  return new ApolloClient({
    connectToDevTools: !isBrowser,
    ssrMode: isBrowser,
    link: new HttpLink({
      uri:
        process.env.NodeEnv === "development"
          ? "http://localhost:4000/graphql"
          : "https://kad-company-server.herokuapp.com/graphql",
      credentials: "same-origin",
    }),
    cache,
  });
}

export function initializeApollo(initialState: NormalizedCacheObject = {}) {
  console.log("initializeApollo :", {
    uri:
      process.env.NodeEnv === "development"
        ? "http://localhost:4000/graphql"
        : "https://kad-company-server.herokuapp.com/graphql",
  });
  // A ?? B => A가 null이면 B 실행 아니면 A 실행
  const _apolloClient = apolloClient ?? createApolloClient();

  if (
    typeof initialState === "object" &&
    Object.values(initialState).length > 0
  ) {
    _apolloClient.cache.restore(initialState);
  }

  if (isBrowser) {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
