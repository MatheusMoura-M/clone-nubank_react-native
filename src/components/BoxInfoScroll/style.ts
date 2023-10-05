import styled from "styled-components/native";
import { MarginProps } from "@screens/Home/style";

export const Container = styled.ScrollView`
  height: 122px;
  max-height: 122px;
  padding-top: 8px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  flex-direction: row;
  overflow: scroll;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

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
