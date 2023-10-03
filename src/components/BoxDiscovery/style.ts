import styled from "styled-components/native";
import { MarginProps } from "@screens/Home/style";

export const Container = styled.View`
  height: 415px;
  padding-top: 6px;
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
  background-color: red;
`;

export const Content = styled.View`
  padding: 15px 10px 10px 15px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 57%;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
`;

export const Text = styled.Text`
  color: black;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 4px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  padding-bottom: 3px;
  letter-spacing: -0.2px;
  line-height: 22px;
`;
