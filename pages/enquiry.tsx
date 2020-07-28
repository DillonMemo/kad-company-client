import React from "react";
import styled from "styled-components";

/** components */
import Layout from "../components/Layout";
import EnquiryForm from "../components/EnquiryForm";

/** utils */
import { sm, xxs } from "../utils/styles";

const EnquiryPage: React.FC = () => {
  return (
    <Layout title="Enquiry">
      <div className="page">
        <div className="container">
          <div className="row justify-content-center align-center">
            <FormWrapper>
              <FormTitle>문의 정보 입력</FormTitle>
              <EnquiryForm />
            </FormWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const FormWrapper = styled.div`
  position: relative;
  width: 40%;
  padding: 1rem 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  ${sm} {
    width: 60%;
  }
  ${xxs} {
    width: 100%;
  }
`;

const FormTitle = styled.h2`
  border-bottom: 1px solid #333;
  margin-bottom: 2rem;
`;

export default EnquiryPage;
