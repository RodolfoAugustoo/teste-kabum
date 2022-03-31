import * as SM from "./styles";
import { Container } from "../../../styles/globals";
import DropDown from "../../DropDown";
export default function SubMenu() {
  return (
    <SM.Div>
      <Container>
        <SM.Select>
          <DropDown />
        </SM.Select>
        <SM.Text>Seja PRIME</SM.Text>
        <SM.Text>Central de atendimento</SM.Text>
      </Container>
    </SM.Div>
  );
}
