import * as SM from "./styles";
import * as G from "../../../styles/globals";
import DropDown from "../../DropDown";
export default function SubMenu() {
  return (
    <SM.SubMenuContainer>
      <G.Container>
        <SM.Select>
          <DropDown />
        </SM.Select>
        <SM.Text>Seja PRIME</SM.Text>
        <SM.Text>Central de atendimento</SM.Text>
      </G.Container>
    </SM.SubMenuContainer>
  );
}
