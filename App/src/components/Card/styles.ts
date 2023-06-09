import styled, { css } from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: 315px;
  padding: 12px;
  margin-top: 12px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  
  border-color: ${({ theme }) => theme.COLORS.ORANGE_DARK};
  border-width: 1px;
  border-radius: 10px;
`;

export const ContainerTitle = styled.View`
  width: 50%;
  padding-left: 15px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.ORANGE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const GenrerContainer = styled.View`
  flex: 1;
`;

export const Genres = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.ORANGE_LIGHT};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Image = styled.Image`
  width: 150px;
  height: 295px;
  border-radius: 6px;
`;

export const Summary = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.ORANGE_DARK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  height: 79%;
`;

