import * as A from "./style";

export default function Address() {
  return (
    <A.Div>
      <A.TextBold>Enviar para: </A.TextBold>{" "}
      <A.TextThin>
        {" "}
        ` Rua das Hortências, 295 - Boa Vista - Limeira SP`
      </A.TextThin>
    </A.Div>
  );
}
