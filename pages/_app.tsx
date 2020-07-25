import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { useApollo } from "../lib/apolloClient";

import palette, { Global } from "../utils/styles";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  // console.log("App", pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={palette}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
