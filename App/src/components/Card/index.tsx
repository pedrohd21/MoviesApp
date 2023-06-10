import { Container, Title, Genres, GenrerContainer, Image, ContainerTitle, Summary} from "./styles";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  genres: string[];
  summary: string;
  image: string;
  id: number;
}

export function Card({title, genres, image, summary, id}: Props){
  const strippedSummary = summary.replace(/(<([^>]+)>)/gi, '');
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Info',{ id: id });

  };

  return(
    <TouchableOpacity onPress={handlePress}>
      <Container>
          <Image source={{ uri: image }} />

          <ContainerTitle>
            <Title>
              {title}
            </Title>
            <GenrerContainer>
              <Genres>
                Genres: 
              {genres.join(" | ")}
              </Genres>
            </GenrerContainer>
            <Summary>
              {strippedSummary}
            </Summary>
          </ContainerTitle>
    
      </Container>
    </TouchableOpacity>
    
  )
}