import { Container, Title, Genres, GenrerContainer, Image, } from "./styles";

type Props = {
  title: string;
  genres: string[];
  image: string;
}
export function Card({title, genres, image}: Props){
  return(
    <Container>

        <Image source={{ uri: image }} />

        <Title>
          Nome:
           {title}
        </Title>

        <GenrerContainer>
          <Genres>
            Gênero: 
          {genres.join(" | ")}
          </Genres>
        </GenrerContainer>

    </Container>
  )
}