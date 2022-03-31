import Image from "next/image";
import Address from "../Address";
import SearchIcon from "../../assets/icons/search-kabum.svg";
import * as S from "./style";

export default function Search() {
  return (
    <S.Div>
      <S.SearchIcon>
        <S.Input placeholder='Busque aqui'></S.Input>
        <S.ImageWrap>
          <Image className='icone-search' height='58px' src={SearchIcon} />
        </S.ImageWrap>
      </S.SearchIcon>
      <Address />
    </S.Div>
  );
}
