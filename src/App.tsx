import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadable from "@loadable/component";
import { css, Global } from "@emotion/core";

import { body, globalScrollbar, root } from "./utils/styles";

const Header = loadable(() =>
  import(/* webpackChunkName: "Header" */ "./components/Header")
);
const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ "./pages/home")
);
const News = loadable(() =>
  import(/* webpackChunkName: "News" */ "./pages/news/News")
);

const App: React.FC = () => {
  return (
    <>
      <Global styles={css`${root}${body}${globalScrollbar}`} />
      <Helmet>
        <title>App</title>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/news" render={() => <News />} />
      </Switch>
    </>
  );
};

export default App;
