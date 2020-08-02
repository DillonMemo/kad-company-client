import React from "react";
import Link from "next/link";
import styled from "styled-components";

/** interfaces */
import { FooterProps } from "../interfaces";

/** styles */
import { sm } from "../utils/styles";

const Footer: React.FC<FooterProps> = ({ animationComplete = true }) => {
  return (
    <>
      {animationComplete && (
        <FooterWrapper>
          <div className="pageGuide">
            <div>
              <h3>Menu</h3>
              <p>
                <Link href="/enquiry">
                  <a>문의</a>
                </Link>
              </p>
            </div>
            <div>
              <h3>Marketing</h3>
              <p>키워드</p>
              <p>바이럴</p>
              <p>언론사</p>
              <p>영상</p>
              <p>SNS</p>
            </div>
            <div>
              <h3>Policy</h3>
              <p>
                <Link href="/policy/[name]" as={`/policy/privacy`}>
                  <a>개인정보취급방침</a>
                </Link>
              </p>
              <p>
                <Link href="/policy/[name]" as={`/policy/ecommerce`}>
                  <a>전자상거래표준약관</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="companyInfo">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/static/KAD_logo_150x150.png" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="info">
              <p>
                <span>상호명: 케이 애드 컴퍼니 | </span>
                <span>사업자등록번호: 415-14-61792 | </span>
                <span>대표자: 김태형 | </span>
              </p>
              <p>
                <span>
                  사업장소재지: 인천광역시 부평구 경인로 737, 305호(십정동) |{" "}
                </span>
                <span>email: qjawls58@naver.com</span>
              </p>
            </div>
          </div>
        </FooterWrapper>
      )}
    </>
  );
};

const FooterWrapper = styled.footer`
  border-top: 1px solid #fafafa;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  .pageGuide {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1rem;

    h3 {
      font-weight: 500;
      margin-bottom: 0.75rem;
    }
    p {
      margin-top: 0;
      margin-bottom: 0.25rem;

      a {
        color: #8c8c8c;
        text-decoration: none;
        touch-action: pan-y;
        transition: color 0.2s ease;

        &:hover {
          color: #111;
        }
      }
    }
  }
  .companyInfo {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      img {
        width: 200px;

        ${sm} {
          width: 150px;
        }
      }
    }

    .info {
      text-align: center;
      p {
        margin: 0;
        padding: 0;
        span {
          font-size: 1rem;

          ${sm} {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

export default Footer;
