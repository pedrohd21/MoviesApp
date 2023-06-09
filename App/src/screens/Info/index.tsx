import { Container } from "./styles";
import { Header } from "../../components/Header";

export function Info(){
  return (
    <Container>
      <Header showBackButton={true} title="Descrição" />
    </Container>
  );
};