import Image from "next/image";
import * as C from "./style";
import ProductImage from "../../../assets/images/Produto.png";
import Price from "../Price";
import Label from "../Labels";
import Favs from "../Favs";
import Button from "../Button";
export default function Card({ oferta }) {
  let a = "Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max";

  return (
    <C.Card>
      <Favs />
      <C.Info>
        <C.ImageWrap>
          <Image src={ProductImage} />
        </C.ImageWrap>
        <C.TextNormal>Fabricante</C.TextNormal>
        <C.TextBold>{a}</C.TextBold>
        {/* <C.TextBold>{oferta.nome}</C.TextBold> */}
        <Price offer={oferta} />
        <Label labels={oferta.labels} />
      </C.Info>
      <Button />
    </C.Card>
  );
}
