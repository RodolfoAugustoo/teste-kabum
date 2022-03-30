import Image from "next/image";

import MyAccount from "../MyAccount";
import * as U from "./userStyle";
import Avatar from "../.././assets/images/user.png";

export default function User() {
  return (
    <U.Div>
      <U.ImageWrap>
        <Image src={Avatar} />
      </U.ImageWrap>
      <U.Info>
        <U.UserName>Olá Luis Henrique</U.UserName>
        <MyAccount />
      </U.Info>
    </U.Div>
  );
}
