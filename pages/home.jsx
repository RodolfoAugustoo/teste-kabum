import Banner from "../components/Banner/Principal";
import BrowserBy from "../components/BrowserBy";
import Campaing from "../components/Campaign";
import Carrossel from "../components/Carrosel";
import * as G from "../styles/globals";

import LayoutDefault from "../components/_hoc/Layout";

export default function Home() {
  return (
    <LayoutDefault>
      <Banner />
      <G.Article>
        <Campaing />
        <Carrossel />
        <BrowserBy />
      </G.Article>
    </LayoutDefault>
  );
}
