import styled from "styled-components/native";
import { MarginProps } from "@screens/Home/style";

export const Container = styled.View`
  height: 415px;
  padding-top: 10px;
  padding-left: 25px;
  margin-top: 16px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ContainerScroll = styled.ScrollView`
  height: 100px;
  margin-top: 12px;
  flex-direction: row;
  overflow: scroll;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Box = styled.View<MarginProps>`
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: ${({ marginRight }) => marginRight}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
  border-radius: 11px;
  width: 240px;
  height: 280px;
`;

export const BoxImage = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  width: 100%;
  height: 120px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 4px;
`;
