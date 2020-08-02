import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

/** components */
import Layout from "../../components/Layout";
import Ecommerce from "./Ecommerce";
import Privacy from "./Privacy";

/** styles */
import { palette } from "../../utils/styles";

const Name: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const title =
    name === "privacy"
      ? "개인정보취급방침"
      : name === "ecommerce"
      ? "전자상거래표준약관"
      : "";

  return (
    <Layout title={`KAD | ${title}`}>
      <div className="page">
        <div className="container">
          <div className="row justify-content-center align-center">
            <NameBlock>
              {name === "privacy" ? <Privacy /> : <Ecommerce />}
            </NameBlock>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const NameBlock = styled.div`
  position: relative;

  .policy-container {
    margin-bottom: 3rem;
    h2 {
      margin: 0.75rem 0;
      color: ${palette.primary.dark};
    }
    p {
      margin-bottom: 0.25rem;
    }
  }
`;

export default Name;
