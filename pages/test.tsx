import Link from "next/link";
import styled from "styled-components";

import { gql, useQuery } from "@apollo/client";

import Layout from "../components/Layout";

import { Palette } from "../utils/styles";

interface SayHelloData {
  sayHello: { text: string; error: string };
}

interface SayHelloVars {
  name: string;
}

const SAY_HELLO_QUERY = gql`
  query GetSayHello($name: String!) {
    sayHello(name: $name) {
      text
      error
    }
  }
`;

const sayHelloQueryVars = {
  name: "Good Dillon!!!",
};

const Title = styled.h1`
  color: ${({ theme }: { theme: Palette }) => theme.primary.normal};
`;

const TestPage: React.FC = () => {
  const { loading, data } = useQuery<SayHelloData, SayHelloVars>(
    SAY_HELLO_QUERY,
    {
      variables: sayHelloQueryVars,
    }
  );

  return (
    <Layout title="Test | Next.js + TypeScript Example">
      <Title>Hello Next.js 👋</Title>
      <h2>{!loading && data && data.sayHello.text}</h2>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

/**
 * staticprops SSG를 이용하여 토큰이라 쿠키를 전달 할 수 있다.
 * 1. https://github.com/vercel/next.js/discussions/11957
 * 2. https://github.com/vercel/next.js/blob/canary/examples/with-apollo/pages/index.js
 */
// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: SAY_HELLO_QUERY,
//     variables: sayHelloQueryVars,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     unstable_revalidate: 1,
//   };
// }

export default TestPage;
