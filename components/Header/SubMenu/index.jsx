import * as SM from "./styles";
import { Container } from "../../../styles/globals";
export default function SubMenu() {
  return (
    <Container>
      <SM.Div>
        <SM.Select>
          <SM.Text>Todos departamentos</SM.Text>
        </SM.Select>
        <SM.Text>Seja PRIME</SM.Text>
        <SM.Text>Central de atendimento</SM.Text>
      </SM.Div>
    </Container>
  );
}
