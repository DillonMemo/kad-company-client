import React, { useEffect } from "react";
import { Button, Col, Form, Input, message, Row, Tooltip } from "antd";
import { Store } from "antd/lib/form/interface";
import { gql, useMutation } from "@apollo/client";

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
    } = values;

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
      <Form.Item name="phoneNumber" label="연락처" rules={[checkNumber]}>
        <Input type="text" placeholder="ex)01012341234" />
      </Form.Item>
      <Form.Item name="budget" label="예산" rules={[checkNumber]}>
        <NumericInput />
      </Form.Item>
      <Form.Item name="content" label="내용">
        <Input.TextArea />
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
export default EnquiryForm;
