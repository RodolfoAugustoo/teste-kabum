import Head from "next/head";
import LayoutDefault from "../components/_hoc/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kabum</title>
        <meta name='description' content='Explosão de preços baixos' />
      </Head>

      <LayoutDefault />
    </div>
  );
}
