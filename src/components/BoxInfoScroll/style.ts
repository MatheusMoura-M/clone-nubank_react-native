import { MarginProps } from "@screens/Home/style";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  max-height: 120px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  margin-top: 18px;
  flex-direction: row;
  overflow: scroll;
`;

export const Container2 = styled.View`
  max-height: 120px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  margin-top: 18px;
  flex-direction: row;
  overflow: scroll;
`;

export const Box = styled.View<MarginProps>`
  align-items: center;
  justify-content: center;
  margin-right: ${({ marginRight }) => marginRight}px;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT}; */
  background-color: #ff0;
  border-radius: 14px;
  width: 250px;
  height: 100px;
  padding-left: 15px;
`;

export const Text = styled.Text`
  color: black;
`;

export const Span = styled.Text`
  color: red;
`;
