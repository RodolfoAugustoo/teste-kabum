import Logo from "../../../assets/icons/Logo.svg";
import Image from "next/image";
import IconMenuHamburger from "../../Menu/Hamburger";
import Search from "../../Search";
import * as HM from "./style";
import Options from "../Options";

export default function HeaderMobile() {
  return (
    <HM.HeaderMobile>
      <HM.Top>
        <HM.Menus>
          <IconMenuHamburger />
          <Image src={Logo} width={"100%"} alt='Logo Kabum' />
        </HM.Menus>
        <Options />
      </HM.Top>
      <HM.Input>
        <Search />
      </HM.Input>
    </HM.HeaderMobile>
  );
}
