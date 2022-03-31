import Image from "next/image";
import IconClock from "../../assets/icons/clock.svg";
import * as C from "./style";

export default function Campaing() {
  return (
    <C.Campaing>
      <C.Title>BLACK FRIDAY</C.Title>
      <C.Info>
        <C.Warning>A PROMOÇÃO TERMINA EM:</C.Warning>
        <Image width={"12px"} src={IconClock} alt='Icone relogio campanha' />
        <C.Title>13d 18:15:56</C.Title>
      </C.Info>
    </C.Campaing>
  );
}
