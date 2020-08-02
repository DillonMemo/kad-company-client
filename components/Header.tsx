import React, { memo, useCallback, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";

import { HeaderNavigator, sm, xs, xxs } from "../utils/styles";

const openMenu = (width: number): void => {
  const tl = gsap.timeline().to("nav", 0, {
    css: { display: "block" },
  });

  tl.to("body", 0, { css: { overflow: "hidden" } })
    .to(".App", 1, {
      y: width <= 654 ? "70vh" : window.innerHeight / 2,
      ease: "expo.inOut",
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -1,
      scaleX: 0,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 5,
      },
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 20,
      },
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18,
      },
    })
    .to("#circle", 0.6, {
      delay: -0.8,
      css: {
        strokeDashoffset: 0,
      },
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0.6, {
      delay: -0.8,
      css: { display: "block" },
    });
};

const closeMenu = (): void => {
  const tl = gsap.timeline().to(".App", 1, {
    y: 0,
    ease: "expo.inOut",
  });

  tl.to("#circle", 0.6, {
    delay: -0.6,
    css: {
      strokeDashoffset: -193,
      strokeDasharray: 227,
    },
  })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40,
      },
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      css: { display: "none" },
    })
    .to("body", 0, { css: { overflow: "auto" } })
    .to("nav", 0, {
      css: { display: "none" },
    });
};

const Header: React.FC = () => {
  const [menuState, setMenuState] = useState<{ menuOpened: boolean }>({
    menuOpened: false,
  });

  useEffect(() => {
    // 페이지 변경이 일어 날때 마다 콜백 함수를 실행 합니다.
    Router.events.on("routeChangeStart", () => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened) {
      openMenu(window.innerWidth);
    } else {
      closeMenu();
    }

    return;
  });

  const handleMenuOpen = useCallback((): void => {
    window.scrollTo(0, 0);
    setMenuState({ menuOpened: true });
  }, [menuState.menuOpened]);

  const handleMenuClose = useCallback(
    (): void => setMenuState({ menuOpened: false }),
    [menuState.menuOpened]
  );

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link href="/">
              <a>
                <img
                  src="/static/KAD_logo_150x150.png"
                  alt="logo"
                  width="200"
                />
              </a>
            </Link>
          </div>
          <div className="nav-toggle">
            <div className="hamburger-menu-wrapper" onClick={handleMenuOpen}>
              <div className="hamburger-menu" onClick={handleMenuOpen}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="hamburger-menu-close" onClick={handleMenuClose}>
              <svg width="52" height="52" viewBox="0 0 64 64">
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(-152 -439)">
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    y1="14.91"
                    transform="translate(184 463.788)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    style={{
                      strokeDasharray: 40,
                      strokeDashoffset: "40px",
                    }}></line>
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M6,9.155,10.949,5"
                    transform="translate(173.051 458.302)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    style={{
                      strokeDasharray: 10,
                      strokeDashoffset: "10px",
                    }}></path>
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M10.949,5,15.9,9.155"
                    transform="translate(173.051 458.302)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    style={{
                      strokeDasharray: 10,
                      strokeDashoffset: "10px",
                    }}></path>
                  <g
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    transform="translate(152 439)"
                    fill="none"
                    stroke="rgba(0,0,0,0.2)"
                    strokeWidth="2.5">
                    <circle cx="32" cy="32" r="32" stroke="none"></circle>
                    <circle
                      id="circle"
                      cx="32"
                      cy="32"
                      r="30.75"
                      fill="none"
                      style={{
                        strokeDasharray: 227,
                        strokeDashoffset: "-193px",
                      }}></circle>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${HeaderNavigator};
  z-index: 4;

  .row {
    display: flex;
    height: 100%;
    padding: 0 2rem;

    ${xs} {
      padding: 0 1rem;
    }

    .logo {
      a {
        cursor: pointer;
        font-size: 1.2rem;
        letter-spacing: 0.5rem;
        color: black;
        text-decoration: none;
        font-weight: 700;
      }
    }

    .nav-toggle {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      ${sm} {
        margin-right: 1.5rem;
      }

      ${xxs} {
        width: 1.25rem;
        margin-right: 1rem;
        padding: 0;
      }
      .hamburger-menu-wrapper {
        cursor: pointer;
        padding: 0.5rem;

        .hamburger-menu {
          width: 1.5rem;
          span {
            text-align: center;
            margin-bottom: 0.3rem;
            background: black;
            height: 2px;
            width: 100%;
            display: block;
          }
        }
      }

      .hamburger-menu-close {
        cursor: pointer;
        position: absolute;
        display: none;

        svg {
          ${sm} {
            width: 3.5rem;
          }
          ${xxs} {
            width: 3rem;
          }
        }
      }
    }
  }
`;

export default memo(Header);
