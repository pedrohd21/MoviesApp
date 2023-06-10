import { Container, Title, Genres, Image, Status, Summary} from "./styles";


type Props = {
  title: string;
  genres: string[];
  summary: string;
  image: string;
  id: number;
  status: string;

}

export function CardDescricao({title, genres, image, summary, id, status}: Props){
  const strippedSummary = summary.replace(/(<([^>]+)>)/gi, '');

  return(
      <Container>
        <Image source={{ uri: image }} />
          <Title>
            {title}
          </Title>
           <Genres>
              Genres: 
              {genres.join(" | ")}
            </Genres>
            <Status>
              Status: {status}
            </Status>

          <Summary>

            Description: {strippedSummary}
          </Summary>
      </Container>
  )
}