import Image from "next/image";
import Search from "../../Search";
import User from "../../User";
import Options from "../Options";
import IconMenuHamburger from "../../Menu/Hamburger";
import Logo from "../../../assets/icons/Logo.svg";
import * as H from "./style";

export default function HeaderDefault() {
  return (
    <H.Main>
      <IconMenuHamburger />
      <H.Logo>
        <Image src={Logo} />
      </H.Logo>{" "}
      <Search />
      <User />
      <Options />
    </H.Main>
  );
}
