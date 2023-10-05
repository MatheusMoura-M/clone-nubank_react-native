import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MarginProps } from "@screens/Home/style";

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
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK_TEXT};
`;

// In Actions
export const IconFontAwesome5 = styled(FontAwesome5).attrs(({ theme }) => ({
  color: theme.COLORS.BLACK,
}))`
  position: absolute;
`;
