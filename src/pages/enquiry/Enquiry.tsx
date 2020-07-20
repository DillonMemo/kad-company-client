/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Helmet } from "react-helmet";
import { Fragment } from "react";

const Enquiry: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>K.AD | 문의하기</title>
      </Helmet>
      <div className="page">
        <div className="container">
          <div className="row">
            <h3>This is the enquiry page</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Enquiry;
