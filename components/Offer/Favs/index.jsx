import Image from "next/image";
import IconHeartNoFill from "../../../assets/icons/heartNoFill.svg";
import IconHeartOrange from "../../../assets/icons/heartOrange.svg";
import IconStarOrange from "../../../assets/icons/starOrange.svg";

import * as F from "./styles";

export default function Favs() {
  return (
    <F.Div>
      <Image src={IconHeartNoFill} />
      <div>
        <Image src={IconStarOrange} />
        <Image src={IconStarOrange} />
        <Image src={IconStarOrange} />
        <Image src={IconStarOrange} />
        <Image src={IconStarOrange} />
      </div>
    </F.Div>
  );
}
