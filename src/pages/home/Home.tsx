/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import gsap from "gsap";

const homeAnimation = (completeAnimation: () => void): void => {
  gsap
    .timeline()
    .from(".line span", 1.8, {
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

import { sm, xl, xxs } from "../../utils/styles";

const Home: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = (): void => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    return homeAnimation(completeAnimation);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>K.AD Company</title>
      </Helmet>
      {animationComplete === false ? (
        <div css={IntroOverlay}>
          <div className="top">
            <div className="overlay-top"></div>
            <div className="overlay-top"></div>
            <div className="overlay-top"></div>
          </div>
          <div className="bottom">
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
            <div className="overlay-bottom"></div>
          </div>
        </div>
      ) : null}
      <section css={MainContainer}>
        <div className="container">
          <div className="row">
            <h2>
              <div className="line">
                <span>검색 효율을 최대로 올리는 것은</span>
              </div>
              <div className="line">
                <span>우리가 하는 일 입니다.</span>
              </div>
            </h2>
            <div className="btn-row">
              <Link to="/">
                More about us{" "}
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
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section css={CasesContainer}>
        <div className="container-fluid">
          <div className="row">
            <div className="case">
              <div className="case-details">
                <span>Curology</span>
                <h2>A custom formula for your skin’s unique needs</h2>
              </div>
              <div className="case-image">
                <img
                  src="https://wrongakram.github.io/ar-episode1/static/media/curology-min.e84c2055.png"
                  alt="A custom formula for your skin’s unique needs"
                />
              </div>
            </div>
            <div className="case">
              <div className="case-details">
                <span>Yourspace</span>
                <h2>Open space floor plans for you next venture</h2>
              </div>
              <div className="case-image">
                <img
                  src="https://wrongakram.github.io/ar-episode1/static/media/yourspace-min.5f9e3077.png"
                  alt="Open space floor plans for you next venture"
                />
              </div>
            </div>
            <div className="case">
              <div className="case-details">
                <span>Lumin</span>
                <h2>For your best look ever</h2>
              </div>
              <div className="case-image">
                <img
                  src="https://wrongakram.github.io/ar-episode1/static/media/lumin-min.379bad94.png"
                  alt="For your best look ever"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

/** styles */
const IntroOverlay = css`
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

      &:nth-child(2) {
        left: 33.333%;

        ${sm} {
          display: none;
        }
      }
      &:nth-child(3) {
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
      width: 33.333vw;
      background: black;
      bottom: 0;
      right: 66.666%;
      ${sm} {
        right: 0;
        width: 100vw;
      }
      &:nth-child(2) {
        right: 33.333%;
        ${sm} {
          width: 100vw;
          top: 100%;
          right: 0;
        }
      }
      &:nth-child(3) {
        right: 0;
        ${sm} {
          width: 100vw;
          top: 200%;
        }
      }
    }
  }
`;

const MainContainer = css`
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

const CasesContainer = css`
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
        cursor: pointer;
        flex: 1;

        .case-details {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
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

            ${xl} {
              font-size: 1.4rem;
            }

            ${sm} {
              font-size: 1.2rem;
              line-height: 2.2rem;
            }
          }

          h2 {
            font-size: 2.4rem;
            line-height: 3.4rem;
            width: 85%;
            margin-top: 16px;
            color: #fff;

            ${xl} {
              font-size: 2rem;
              line-height: 2.4rem;
            }

            ${sm} {
              font-size: 1.7rem;
              line-height: 2.2rem;
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
          opacity: 0.65;
          transition: opacity 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        &:hover {
          .case-image {
            opacity: 0.4;
          }
        }
      }
    }
  }
`;

export default Home;
