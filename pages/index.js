import Head from "next/head";
import Banner from "../components/Banner/Principal";
import BrowserBy from "../components/BrowserBy";
import Campaing from "../components/Campaign";
import Carrossel from "../components/Carrosel";
import Header from "../components/Header/header";
import styles from "../styles/Home.module.css";
import * as G from "../styles/globals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kabum</title>
        <meta name='description' content='Explosão de preços baixos' />
      </Head>

      <Header />
      <main>
        <G.Container bgColor='white' flexDirection='column'>
          <Banner />
          <article>
            <Campaing />
            <Carrossel />
            <BrowserBy />
          </article>
        </G.Container>
      </main>

      <footer>Powered by </footer>
    </div>
  );
}
