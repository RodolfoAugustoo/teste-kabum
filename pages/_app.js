import { Fragment } from "react/cjs/react.production.min";
import GlobalStyles from "../styles/globals.js";

function KabumApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default KabumApp;
