import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;


  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.ORANGE};

  
  font-size: 20px;


  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.ORANGE};
  padding: 16px;
  margin-top: 30px;
  margin-bottom: 16px;
`;