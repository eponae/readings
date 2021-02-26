import Head from "next/head";
import Dashboard from "../components/dashboard/Dashboard";
import { Container, Footer, Logo, Main } from "./index.style";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Readings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Dashboard />
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </Footer>
    </Container>
  );
}
