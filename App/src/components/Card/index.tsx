// import { TouchableOpacityProps } from "react-native"
import { Container, Title } from "./styles";

type Props = {
  title: string;
}
export function Card({title}: Props){
  return(
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}