import Image from "next/image";
import * as HO from "./optionsStyles";

import IconCart from "../../../assets/icons/cart.svg";
import IconHeart from "../../../assets/icons/heart.svg";
import IconSAC from "../../../assets/icons/sac.svg";

export default function Options() {
  return (
    <HO.Div>
      <HO.ImageWrap>
        <Image src={IconSAC}></Image>
      </HO.ImageWrap>
      <HO.ImageWrap>
        <Image src={IconHeart} />
      </HO.ImageWrap>
      <HO.ImageWrap>
        <Image src={IconCart} />
      </HO.ImageWrap>
    </HO.Div>
  );
}
