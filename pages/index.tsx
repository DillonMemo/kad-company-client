import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";

/** components */
import Layout from "../components/Layout";

/** utils */
import { lg, sm, xl, xxl, xxs } from "../utils/styles";

const indexAnimation = (completeAnimation: () => void): void => {
  gsap
    .timeline()
    .from(".line span", 1.2, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const IndexPage: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = (): void => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    return indexAnimation(completeAnimation);
  }, []);

  return (
    <Layout title="KAD">
      {animationComplete === false ? (
        <IntroOverlay>
          <div className="top">
            <div className="overlay-top"></div>
            <div className="overlay-top"></div>
            <div className="overlay-top"></div>
          </div>
          <div className="bottom">
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
          </div>
        </IntroOverlay>
      ) : null}
      <MainContainer>
        <div className="container">
          <div className="row">
            <h2>
              <div className="line">
                <span>확실하고 차별화된 마케팅 컨설팅</span>
              </div>
              {/* <div className="line">
                <span>what we do</span>
              </div> */}
            </h2>
            <div className="btn-row">
              <Link href="/enquiry">
                <a>
                  문의로 이동하기{" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
      <CasesContainer>
        <div className="container-fluid">
          <div className="row">
            <div className="case">
              <div className="case-details">
                <h2>키워드 마케팅</h2>
                <span>소비자가 찾는 키워드를</span>
                <span>분석하여 검색 노출</span>
              </div>
              <div
                className="case-image"
                style={{ backgroundColor: "#bbbbbb" }}>
                <img
                  src="/static/keywordmarketing.png"
                  alt="A custom formula for your skin’s unique needs"
                />
              </div>
            </div>
            <div className="case">
              <div className="case-details">
                <h2>바이럴 마케팅</h2>
                <span>블로그, 연관, 플레이스로</span>
                <span>브랜드 광고 노출</span>
              </div>
              <div
                className="case-image"
                style={{ backgroundColor: "#2eb300" }}>
                <img
                  src="/static/viralmarketing.png"
                  alt="Open space floor plans for you next venture"
                />
              </div>
            </div>
            <div className="case">
              <div className="case-details">
                <h2>언론사 광고</h2>
                <span>언로사 광고 노출로</span>
                <span>신뢰도 향상</span>
              </div>
              <div
                className="case-image"
                style={{ backgroundColor: "#0048b3" }}>
                <img
                  src="/static/pressmarketing.png"
                  alt="For your best look ever"
                />
              </div>
            </div>
            <div className="case">
              <div className="case-details">
                <h2>영상 마케팅</h2>
                <span>소비자의 시선을</span>
                <span>사로잡는 영상마케팅</span>
              </div>
              <div
                className="case-image"
                style={{ backgroundColor: "#d70000" }}>
                <img
                  src="/static/videomarketing.png"
                  alt="A custom formula for your skin’s unique needs"
                />
              </div>
            </div>
            <div className="case">
              <div className="case-details">
                <h2>SNS 마케팅</h2>
                <span>소비자와 한층 더 가깝게</span>
                <span>소통하며 브랜드 확산</span>
              </div>
              <div
                className="case-image"
                style={{ backgroundColor: "#4267b2" }}>
                <img
                  src="/static/snsmarketing.png"
                  alt="A custom formula for your skin’s unique needs"
                />
              </div>
            </div>
          </div>
        </div>
      </CasesContainer>
    </Layout>
  );
};

/** styles */
const IntroOverlay = styled.div`
  .top {
    height: 50vh;
    position: absolute;
    width: 100%;
    z-index: 8;
    .overlay-top {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background: black;
      bottom: 0;
      left: 0;
      right: 0;

      ${sm} {
        width: 100vw;
      }

      &:nth-of-type(2) {
        left: 33.333%;

        ${sm} {
          display: none;
        }
      }
      &:nth-of-type(3) {
        left: 66.666%;

        ${sm} {
          display: none;
        }
      }
    }
  }
  .bottom {
    height: 50vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 8;
    .overlay-bottom {
      position: absolute;
      height: 100%;
      width: 20vw;
      background: black;
      bottom: 0;
      right: 80%;
      ${sm} {
        right: 0;
        width: 100vw;
      }
      &:nth-of-type(2) {
        right: 60%;
        ${sm} {
          width: 100vw;
          top: 100%;
          right: 0;
        }
      }
      &:nth-of-type(3) {
        right: 40%;
        ${sm} {
          width: 100vw;
          top: 200%;
        }
      }
      &:nth-of-type(4) {
        right: 20%;
        ${sm} {
          width: 100vw;
          top: 200%;
        }
      }
      &:nth-of-type(5) {
        right: 0;
        ${sm} {
          width: 100vw;
          top: 200%;
        }
      }
    }
  }
`;

const MainContainer = styled.section`
  height: 50vh;
  background-color: white;

  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0 2rem;

    ${xxs} {
      padding: 0 1rem;
    }

    h2 {
      font-size: 3rem;
      line-height: 4.2rem;
      font-weight: 700;
      z-index: 10;
      color: #fff;
      mix-blend-mode: difference;
      margin: 2.49rem 0;

      ${sm} {
        font-size: 2.4rem;
        line-height: 3rem;
      }

      ${xxs} {
        margin-top: 4.5rem;
        font-size: 1.7rem;
        line-height: 2.2rem;
      }

      .line {
        margin-bottom: 1.5rem;
        height: 3.5rem;
        position: relative;
        overflow: hidden;

        span {
          position: absolute;
        }
      }
    }

    .btn-row {
      width: 256px;
      position: relative;

      a {
        font-size: 1.6rem;
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;

        ${sm} {
          font-size: 1.3rem;
        }

        ${xxs} {
          font-size: 1.3rem;
        }

        svg {
          margin-left: 1rem;
          border: 2px solid #000;
          padding: 0.75rem;
          height: 3rem;
          width: 3rem;
          border-radius: 100px;
          transition: 0.4s ease-in-out;

          ${sm} {
            padding: 0.375rem;
            width: 2.75rem;
            height: 2.75rem;
          }

          ${xxs} {
            padding: 0.25rem;
            width: 2.25rem;
            height: 2.25rem;
          }
        }

        &:hover {
          svg {
            background-color: black;
            color: white;
          }
        }
      }
    }
  }
`;

const CasesContainer = styled.section`
  height: 50vh;
  .container-fluid {
    width: 100%;
    height: 100%;

    .row {
      display: flex;
      height: 100%;

      ${sm} {
        flex-direction: column;
      }

      .case {
        position: relative;
        background: #000;
        cursor: default;
        flex: 1;

        .case-details {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 32px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;

          ${sm} {
            height: 50vh;
          }

          span {
            font-size: 1.6rem;
            opacity: 0.8;
            color: #fff;
            font-weight: 600;

            ${xxl} {
              font-size: 1.4rem;
            }

            ${xl} {
              font-size: 1.2rem;
            }

            ${sm} {
              font-size: 1rem;
              line-height: 2.2rem;
            }
          }

          h2 {
            font-size: 2.2rem;
            line-height: 3.2rem;
            width: 85%;
            margin-top: 16px;
            color: #fff;
            text-align: center;

            ${xxl} {
              font-size: 1.8rem;
              line-height: 2.6rem;
            }
            ${xl} {
              font-size: 1.4rem;
              line-height: 2.2rem;
            }

            ${sm} {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }
        }

        .case-image {
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* opacity: 0.65; */
          transition: opacity 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);

          display: flex;
          justify-content: center;
          padding-top: 3.5rem;

          img {
            height: 200px;
            width: 200px;
            object-fit: cover;

            ${xl} {
              height: 150px;
              width: 150px;
            }

            ${lg} {
              height: 100px;
              width: 100px;
            }
            ${sm} {
              height: 150px;
              width: 150px;
            }
          }
        }

        &:hover {
          .case-image {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;

export default IndexPage;
