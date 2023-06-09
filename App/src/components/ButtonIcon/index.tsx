import { TouchableOpacityProps } from 'react-native';

import { Container, IconButton } from './styles';

type Props = TouchableOpacityProps;

export function ButtonIcon({...rest }: Props){
  return (
    <Container{...rest}>
      <IconButton name="search" />
    </Container>
  );
}