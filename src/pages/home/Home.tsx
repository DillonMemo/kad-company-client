/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Home: React.FC = () => {
  return (
    <div css={divWrapper}>
      Home__<span>Blue!!</span>
      PORT : {process.env.PORT}
    </div>
  );
};

const divWrapper = css`
  span {
    color: blue;
  }
`;

export default Home;
