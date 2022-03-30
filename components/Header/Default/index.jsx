import Image from "next/image";
import Search from "../../Search";
import User from "../../User";
import Options from "../Options";
import IconMenuHamburger from "../../Menu/Hamburger";
import Logo from "../../../assets/icons/Logo.svg";
import * as H from "./style";
import SubMenu from "../SubMenu";
import * as G from "../../../styles/globals";

export default function HeaderDefault() {
  return (
    <>
      <H.Main>
        <G.Container alignItems='center'>
          <IconMenuHamburger />
          <H.Logo>
            <Image src={Logo} />
          </H.Logo>{" "}
          <Search />
          <User />
          <Options />
        </G.Container>
      </H.Main>
      <SubMenu />
    </>
  );
}
