import * as P from "./style";

export default function Price({ offer }) {
  return (
    <P.Div>
      <P.TextNormalDarkLine>
        {offer.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </P.TextNormalDarkLine>
      <P.TextOrange>
        {offer.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </P.TextOrange>
      <P.TextNormalDark>À VISTA</P.TextNormalDark>
    </P.Div>
  );
}
