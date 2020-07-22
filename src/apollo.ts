import {
  ApolloClient,
  ApolloLink,
  concat,
  gql,
  HttpLink,
  InMemoryCache,
  Operation,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import { WebSocketLink } from "@apollo/client/link/ws";

const isDev = process.env.NODE_ENV === "development";
console.log("apollo isDev :", isDev);

const cache = new InMemoryCache();
cache.writeQuery({
  query: gql`
    query Auth {
      auth {
        isLoggedIn
      }
    }
  `,
  data: {
    auth: {
      isLoggedIn: Boolean(localStorage.getItem("jwt")),
      __typename: "Auth",
    },
  },
});

const getToken = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    return token;
  } else {
    return "";
  }
};

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  operation.setContext({
    headers: {
      "X-JWT": getToken(),
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: isDev ? "http://localhost:4000/graphql" : "https://example.com/api",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.error(`Unexpected error: ${message}`);
    });
  }

  if (networkError) {
    console.error(`Network error: ${networkError}`);
  }
});

const client = new ApolloClient({
  cache,
  // link: ApolloLink.from([errorLink, concat(authMiddleware, httpLink)]),
  link: ApolloLink.from([errorLink, concat(authMiddleware, httpLink)]),
});

export default client;
