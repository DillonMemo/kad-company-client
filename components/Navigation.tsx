import Link from "next/link";
import styled from "styled-components";

import { sm, xxs } from "../utils/styles";

const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link href="/enquiry">
                  <a>문의</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">AGENCY Company</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">본사</li>
                <li>서울특별시 oo구 oo대로 oo빌딩 100층</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">연락처</li>
                <li>010-1234-1234</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  position: fixed;
  overflow: hidden;
  background-color: #fff3d8;

  a {
    position: relative;
    text-decoration: none;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background-color: black;
      transition: width 0.4s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
        background-color: black;
      }
    }
  }

  .nav-columns {
    transform: translateY(125px);
    display: flex;
    padding: 0 2rem;

    ${sm} {
      flex-direction: column;
    }

    ${xxs} {
      padding: 0 1rem;
    }

    .nav-column {
      flex: 1;

      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;

        ${sm} {
          margin-bottom: 1.4rem;
          font-size: 1rem;
        }
        ${xxs} {
          margin-bottom: 1.2rem;
          font-size: 0.875rem;
        }
      }

      .nav-infos {
        display: flex;
        flex-wrap: wrap;

        ${sm} {
          justify-content: space-between;
        }

        .nav-info {
          padding: 0;
          flex-basis: 50%;

          ${sm} {
            display: none;
          }

          .nav-info-label {
            font-weight: 600;
          }

          li {
            font-weight: 300;
            list-style: none;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;

            ${sm} {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }

            ${xxs} {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }

            a {
              text-decoration: none;
              color: black;
            }
          }
        }
      }

      .nav-links {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          margin-bottom: 2.4rem;

          ${xxs} {
            margin-bottom: 1.6rem;
          }

          a {
            font-weight: 600;
            font-size: 2.8rem;
            color: black;

            ${xxs} {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
`;

export default Navigation;
