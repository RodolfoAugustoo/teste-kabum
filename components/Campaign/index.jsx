import Image from "next/image";
import * as C from "./style";
import IconClock from "../../assets/icons/clock.svg";

export default function Campaing() {
  return (
    <C.Campaing>
      <C.Title>BLACK FRIDAY</C.Title>
      <C.Info>
        <C.Warning>A PROMOÇÃO TERMINA EM:</C.Warning>
        <Image src={IconClock} />
        <C.Title>13d 18:15:56</C.Title>
      </C.Info>
    </C.Campaing>
  );
}
