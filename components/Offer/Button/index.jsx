import Image from "next/image";
import * as B from "./style";
import IconCart from "../../../assets/icons/cart.svg";
export default function Button() {
  return (
    <B.Button>
      <Image src={IconCart} />
      <B.Text>Comprar</B.Text>
    </B.Button>
  );
}
