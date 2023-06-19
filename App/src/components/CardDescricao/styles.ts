import styled, { css } from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  flex:1;

`;

export const ContainerImg = styled.View`
  position: absolute;
  top: 12px;
  left: 6px;
`;



export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.ORANGE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  margin-top: 10px;
`;


export const Genres = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.ORANGE_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-top: 10px;
`;

export const Status = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.ORANGE_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-top: 10px;
`;

export const Summary = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.ORANGE_DARK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 210px;
  height: 320px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #B26C00;
  align-self: center;
  

`;



