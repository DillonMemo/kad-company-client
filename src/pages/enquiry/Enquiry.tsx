/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Helmet } from "react-helmet";
import { Fragment } from "react";

/** material */
import Button from "@material-ui/core/Button";

import { gql, useQuery } from "@apollo/client";

// const IS_LOGGED_IN = gql`
//   {
//     auth {
//       isLoggedIn @client
//     }
//   }
// `;

const TEST = gql`
  query GetSayHello($name: String!) {
    sayHello(name: $name) {
      text
      error
    }
  }
`;

const Enquiry: React.FC = () => {
  // const { loading, data } = useQuery(TEST, {
  //   variables: { name: "Dillon!!!" },
  // });
  // console.log("data", data);

  return (
    <Fragment>
      <Helmet>
        <title>K.AD | 문의하기</title>
      </Helmet>
      <div className="page">
        <div className="container">
          <div className="row" css={FormRowContainer}>
            <div>
              {/* {!loading && <span>{data.sayHello.text}</span>} */}
              <Button variant="contained" color="primary">
                Primary
              </Button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submit");
              }}>
              <div className="form-group">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="회사명"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="성"
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="이름"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="이메일"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="연락처"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  placeholder="예산"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="content"
                  id="content"
                  placeholder="기타 문의 사항"
                />
              </div>
              <div className="form-group">
                <button>확인</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const FormRowContainer = css`
  flex-direction: column;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    background-color: lightgray;
  }
`;

export default Enquiry;
