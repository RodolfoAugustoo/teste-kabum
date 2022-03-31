import Header from "../../Header/header";
import * as G from "../../../styles/globals";

export default function LayoutDefault({ children }) {
  return (
    <>
      <Header />
      <main>
        <G.Container flexDirection='column' alignItems='center'>
          {children}
        </G.Container>
      </main>
    </>
  );
}
