import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Favorite(){
  return (
    <Container>
      <Header showBackButton={true} title="Favorite"/>
    </Container>
  );
};