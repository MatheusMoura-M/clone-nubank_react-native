import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { SizeAndPositionProps } from "@screens/Home/style";

export const ClickableContainer = styled.TouchableOpacity``;

export const Container = styled(MotiView)`
  min-height: 101.5px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 24px;
  padding-right: 24px;
  z-index: 99;
`;

export const ItemTitle = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  margin-top: 3px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

export const IconMaterialIconsBalance = styled(MaterialIcons).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_400,
  })
)<SizeAndPositionProps>`
  position: ${({ position }) => (position ? position : "relative")};
  top: ${({ top }) => top && top}px;
  bottom: ${({ bottom }) => bottom && bottom}px;
  left: ${({ left }) => left && left}px;
  right: ${({ right }) => right && right}px;
`;
