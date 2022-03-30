import Image from "next/image";
import ImgBanner from "../../../assets/images/Banner-Topo.png";
import * as B from "./style";

export default function Banner() {
  return (
    <B.a>
      <Image src={ImgBanner} />
    </B.a>
  );
}
