/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { lg, md, xl, xs } from "../utils/styles";
const Header: React.FC = () => {
  return (
    <header css={HeaderWrapper}>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">KAD</Link>
          </div>
          <div className="nav">
            <Link to="/news">News</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderWrapper = css`
  position: fixed;
  width: 100%;
  height: 4.25rem;
  z-index: 4;

  .container {
    width: 1560px;
    min-width: 1560px;
    margin: 0 auto;
    height: 100%;

    ${md} {
      width: 1280px;
      min-width: 1280px;
    }
    ${xl} {
      width: 1080px;
      min-width: 1080px;
    }
    ${lg} {
      width: 100%;
      min-width: 100%;
    }

    .row {
      display: flex;
      height: 100%;
      padding: 0 2rem;

      ${xs} {
        padding: 0 1rem;
      }

      .logo {
        a {
          font-size: 1.2rem;
          letter-spacing: 0.5rem;
          color: black;
          text-decoration: none;
          font-weight: 700;
        }
      }
    }

    .nav {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 700;

      a {
        margin: 0 0.5rem;
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export default Header;
