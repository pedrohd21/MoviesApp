import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;


  background-color: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};

  
  font-size: 20px;


  border-radius: 6px;
  padding: 16px;
  margin-top: 30px;
  margin-bottom: 16px;
`;