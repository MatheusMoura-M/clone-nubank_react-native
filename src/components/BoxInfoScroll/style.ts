import { MarginProps } from "@screens/Home/style";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  max-height: 100px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  margin-top: 18px;
`;

export const Box = styled.View<MarginProps>`
  align-items: center;
  justify-content: center;
  margin-right: ${({ marginRight }) => marginRight}px;
  background-color: #dadada;
  border-radius: 14px;
  width: 150px;
  height: 80px;
`;

export const Text = styled.Text`
  color: red;
`;
