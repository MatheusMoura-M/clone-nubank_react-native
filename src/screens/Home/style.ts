import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type DirectionVariant = "column" | "row";

export type SizeAndPositionProps = {
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type MarginProps = {
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  margin?: number;
};

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITETOGGLE};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 14px;
`;

// BOX MY CARDS
export const BoxMyCards = styled.View`
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  flex-direction: row;
  gap: 20px;
  width: 90%;
  height: 57px;
  margin-left: 25px;
  margin-right: 23px;
  padding-left: 18px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
  border-radius: 15px;
`;

export const TitleMyCards = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 6px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const IconMaterialIcons = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.BLACKTOGGLE,
}))``;
