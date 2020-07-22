import { hydrate } from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";

import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

const rootElement = document.getElementById("root");

/** emotion */
const cache = createCache();

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );

loadableReady(() =>
  hydrate(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </ApolloProvider>
    </BrowserRouter>,
    rootElement
  )
).catch((error) => console.error(error));

if (module.hot) {
  module.hot.accept();
}
