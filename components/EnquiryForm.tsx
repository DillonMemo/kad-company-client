import React from "react";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Form,
  Input,
  message,
  Row,
  Tooltip,
} from "antd";
import { Store } from "antd/lib/form/interface";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";

import { formatCommaNumber } from "../utils";

interface AddInquireData {
  ok: boolean;
  error?: string;
}
interface AddInquireVars {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  budget: string;
  content?: string;
}

const ADD_INQUIRE = gql`
  mutation AddInquireResolvers(
    $companyName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $budget: String!
    $content: String
  ) {
    AddInquire(
      companyName: $companyName
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      budget: $budget
      content: $content
    ) {
      ok
      error
    }
  }
`;

const EnquiryForm = () => {
  const [addInquire] = useMutation<AddInquireData, AddInquireVars>(ADD_INQUIRE);
  const [form] = Form.useForm();

  const onFinish = (values: Store) => {
    const {
      companyName,
      firstName,
      lastName,
      email,
      phoneNumber,
      budget,
      content,
      isPersonalInfo,
    } = values;

    if (isPersonalInfo) {
      addInquire({
        variables: {
          companyName,
          firstName,
          lastName,
          email,
          phoneNumber,
          budget,
          content,
        },
      })
        .then(({ data }) => {
          const status: boolean = (data as any).AddInquire.ok;
          if (status) {
            const form: any = document.forms[0].querySelector(
              'button[type="submit"]'
            );
            form.disabled = true;
            message.success("문의가 정상적으로 등록 되었습니다.");
            setTimeout(() => window.location.reload(), 1000);
          } else {
            message.error(
              "문제가 발생 하였습니다. \n고객센터에 문의 해주시기 바랍니다."
            );
          }
        })
        .catch((error) => {
          message.error(error);
        });
    } else {
      message.info("개인정보처리방침에 동의 하시기 바랍니다.");
    }
  };

  const checkNumber = ({ getFieldValue, setFieldsValue }: any) => ({
    validator(rule: any, value: string) {
      if (!value) return Promise.reject("필수 입력 입니다.");
      // else if (/^[0-9\b]+$/.test(value)) return Promise.resolve();
      // 맨 첫글자는 - 도 허용 | 숫자는 전부 허용 | .은 하나만 허용
      else if (/^-?\d*(\.\d*)?$/.test(value)) return Promise.resolve();
      else {
        const fieldName: string = rule && rule["field"];
        setFieldsValue({
          [fieldName]: getFieldValue(fieldName).slice(
            0,
            getFieldValue(fieldName).length - 1
          ),
        });
        return Promise.reject("번호만 입력 가능 합니다.");
      }
    },
  });

  return (
    <Form
      //   labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
      //   wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
      form={form}
      name="enquiry-form"
      id="enquiry-form"
      initialValues={{ isPersonalInfo: true }}
      onFinish={onFinish}
      scrollToFirstError /** 제출시 첫 번째 실패한 필드로 자동 스크롤 */
    >
      <Form.Item
        name="companyName"
        label="회사명"
        rules={[
          {
            required: true,
            message: "회사명을 입력 하세요.",
            whitespace: true,
          },
        ]}
        labelAlign="left">
        <Input />
      </Form.Item>
      <Row gutter={8}>
        <Col span={8}>
          <Form.Item
            name="firstName"
            label="성"
            rules={[
              {
                required: true,
                message: "성을 입력 하세요.",
                whitespace: true,
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="lastName"
            label="이름"
            rules={[
              {
                required: true,
                message: "이름을 입력 하세요.",
                whitespace: true,
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="email"
        label="메일"
        rules={[
          { type: "email", message: "이메일 형식이 아닙니다." },
          { required: true, message: "메일을 입력 하세요." },
        ]}>
        <Input type="email" placeholder="ex)example@example.com" />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="연락처"
        rules={[{ required: true }, checkNumber]}>
        <Input type="text" placeholder="ex)01012341234" />
      </Form.Item>
      <Form.Item
        name="budget"
        label="예산"
        rules={[{ required: true }, checkNumber]}>
        <NumericInput />
      </Form.Item>
      <Form.Item name="content" label="내용">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="isPersonalInfo" valuePropName="checked">
        <Checkbox>개인정보처리방침 동의</Checkbox>
      </Form.Item>
      <Form.Item>
        <CustomCollapse accordion>
          <CustomCollapse.Panel header="개인정보처리방침 자세히 보기" key="1">
            <p>수집하는 개인정보의 항목</p>
            <p>
              회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은
              개인정보를 수집하고 있습니다.
            </p>
            <p>- 수집항목 : 회사명, 성명, 메일, 연락처, 예산, 내용</p>
            <p>- 개인정보 수집방법 : 홈페이지(문의)</p>
            <p>
              개인정보의 수집 및 이용목적 회사는 수집한 개인정보를 다음의 목적을
              위해 활용합니다.
            </p>
            <p>
              - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 구매
              및 요금 결제, 물품배송 또는 청구지 등 발송
            </p>
            <p>개인정보의 보유 및 이용기간</p>
            <p>
              회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당
              정보를 지체 없이 파기합니다.
            </p>
          </CustomCollapse.Panel>
        </CustomCollapse>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          문의하기
        </Button>
      </Form.Item>
    </Form>
  );
};

interface NumericInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value = "",
  onChange,
}) => {
  return (
    <Tooltip
      trigger={["focus"]}
      title={
        value ? (
          <span className="numeric-input-title">
            {value !== "-" ? formatCommaNumber(value) : "-"}
          </span>
        ) : (
          "0"
        )
      }
      placement="topLeft"
      overlayClassName="numeric-input">
      <Input
        type="text"
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
      />
    </Tooltip>
  );
};

const CustomCollapse = styled(Collapse)`
  p {
    margin: 0;
    line-height: 1rem;
  }
`;
export default EnquiryForm;
