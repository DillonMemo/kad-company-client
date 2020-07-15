/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const News: React.FC = () => {
  const [quote, setQuote] = useState<string>("");
  useEffect(() => {
    setQuote("test");
    fetch("http://horizonshq.herokuapp.com/api/inspirationalquotes")
      .then((json) => json.json())
      .then((response) => {
        console.log(response);
        setQuote(response.message);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Title | News</title>
      </Helmet>
      <div>
        News__
        <p>{quote}</p>
      </div>
    </Fragment>
  );
};

export default News;
