import Head from "next/head";
import Banner from "../components/Banner/Principal";
import BrowserBy from "../components/BrowserBy";
import Campaing from "../components/Campaign";
import Carrossel from "../components/Carrosel";
import Header from "../components/Header/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  const artStyle = {
    width: "1360px",
    position: "relative",
    background: "white",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kabum</title>
        <meta name='description' content='Explosão de preços baixos' />
      </Head>

      <Header />
      <main className={styles.main}>
        <Banner />
        <article style={artStyle}>
          <Campaing />
          <Carrossel />
          <BrowserBy />
        </article>
      </main>
      <footer className={styles.footer}>Powered by </footer>
    </div>
  );
}
