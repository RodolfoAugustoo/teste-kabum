import Address from "../Address";
import * as S from "./style";

export default function Search() {
  return (
    <S.Div>
      <S.Input placeholder='Busque aqui'></S.Input>
      <Address />
    </S.Div>
  );
}
