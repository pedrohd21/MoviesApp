import { Container, Title, Genres, GenrerContainer, Image, ContainerTitle, Summary} from "./styles";

type Props = {
  title: string;
  genres: string[];
  summary: string;
  image: string;
}

export function Card({title, genres, image, summary}: Props){
  const strippedSummary = summary.replace(/(<([^>]+)>)/gi, '');
  return(
    <Container>
        <Image source={{ uri: image }} />

        <ContainerTitle>
          <Title>
            {title}
          </Title>
          <GenrerContainer>
            <Genres>
              Gênero: 
            {genres.join(" | ")}
            </Genres>
          </GenrerContainer>
          <Summary>
            {strippedSummary}
          </Summary>
        </ContainerTitle>
  
    </Container>
  )
}