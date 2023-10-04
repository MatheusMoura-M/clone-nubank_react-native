import { MarginProps } from "@screens/Home/style";
import styled from "styled-components/native";

export const Box = styled.View<MarginProps>`
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: ${({ marginRight }) => marginRight}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
  border-radius: 14px;
  width: 277px;
  height: 87px;
  padding: 17px 15px 0 25px;
  padding-left: 25px;
  padding-right: 15px;
`;

export const Text = styled.Text`
  color: black;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`;
