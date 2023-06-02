import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 250px;
  padding: 12px;
  margin-top: 12px;
  margin-bottom: -40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GREEN};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-bottom: 8px;
`;

export const GenrerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Genres = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 6px;
`;
