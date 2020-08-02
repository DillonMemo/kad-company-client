import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

/** components */
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ children, title = "Default" }: Props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <Header />
      <Wrapper className="App">{children}</Wrapper>
      {router.pathname !== "/" && <Footer />}
      <Navigation />
    </>
  );
}

const Wrapper = styled.div`
  z-index: 2;
  position: relative;
  transform: translateY(0);
`;
