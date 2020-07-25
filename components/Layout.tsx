import Head from "next/head";
import styled from "styled-components";

/** components */
import Header from "./Header";
import Navigation from "./Navigation";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ children, title = "Default" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Wrapper className="App">{children}</Wrapper>
      <Navigation />
    </>
  );
}

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
  transform: translateY(0);
`;
