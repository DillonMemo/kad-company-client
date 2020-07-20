/** @jsx jsx */
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadable from "@loadable/component";
import { css, Global, jsx } from "@emotion/core";

import { body, globalScrollbar, root } from "./utils/styles";

const Header = loadable(() =>
  import(/* webpackChunkName: "Header" */ "./components/Header")
);
const Navigation = loadable(() =>
  import(/* webpackChunkName: "Header" */ "./components/Navigation")
);
const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ "./pages/home")
);
const Enquiry = loadable(() =>
  import(/* webpackChunkName: "Enquiry" */ "./pages/enquiry")
);

const App: React.FC = () => {
  return (
    <Fragment>
      <Global styles={css`${root}${body}${globalScrollbar}`} />
      <Helmet>
        <title>App</title>
      </Helmet>
      <Header />
      <div className="App" css={Wrapper}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/enquiry" render={() => <Enquiry />} />
        </Switch>
      </div>
      <Navigation />
    </Fragment>
  );
};

const Wrapper = css`
  z-index: 2;
  position: relative;
  transform: translateY(0);
`;

export default App;
