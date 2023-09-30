import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export type DirectionVariant = "column" | "row";

type ActionProps = {
  marginRight: number;
};

type AreaButtonProps = {
  flexDirection?: DirectionVariant;
};

type SizeAndPositionProps = {
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

type LabelButtonProps = {
  marginRight?: number;
  marginLeft?: number;
};

export const Container = styled.ScrollView`
  flex: 1;
  max-height: 125px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  margin-bottom: 25px;
`;

export const ActionButton = styled.TouchableOpacity<ActionProps>`
  align-items: center;
  margin-right: ${({ marginRight }) => marginRight}px;
  position: relative;
`;

export const AreaButton = styled.View<AreaButtonProps>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
  width: 71px;
  height: 71px;
  border-radius: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
`;

export const LabelButton = styled.Text<LabelButtonProps>`
  margin-top: 9px;
  margin-top: 9px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

export const LabelButtonRecharge = styled.Text`
  position: absolute;
  min-width: 78px;
  bottom: 3px;
  margin-top: 9px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

// ICON LINES
export const BoxLines = styled.View<SizeAndPositionProps>`
  width: ${({ width }) => (width ? width : 4)}px;
  height: ${({ height }) => (height ? height : 9)}px;
  background-color: black;
  margin-right: 1.5px;
`;

// ICON TRANSFERÊNCIA
export const BoxTransfer = styled.View`
  width: 23px;
  height: 14px;
  align-items: center;
  justify-content: center;
  border-color: black;
  border-width: 2px;
`;

export const IconTransfer = styled.View`
  height: 6.5px;
  width: 6.5px;
  border-color: black;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

// ICON PHONE
export const BoxPhone = styled.View<SizeAndPositionProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-color: black;
  border-width: 2px;
  border-radius: 4px;
`;

export const HorizontalLinePhone = styled.View<SizeAndPositionProps>`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: black;
`;

// ICON CADEADO
export const BoxPadlock = styled.View`
  height: 15px;
  align-items: center;
  justify-content: center;
  padding-left: 1px;
`;

export const IconWrapperPadlock = styled.View`
  height: 10.8px;
  overflow: hidden;
`;

export const IconContainerPadlock = styled.View`
  height: 20px;
  width: 15px;
  border-color: black;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const HorizontalLinePadlock = styled.View`
  width: 20px;
  border-color: black;
  border-bottom-width: 2px;
`;

export const BottomRectanglePadlock = styled.View`
  height: 9px;
  width: 18px;
  border-color: black;
  border-width: 2px;
  border-top-width: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
`;

// ICON NETOWORK
export const BoxLinesNetwork = styled.View<SizeAndPositionProps>`
  width: ${({ width }) => (width ? width : 4)}px;
  height: ${({ height }) => (height ? height : 9)}px;
  background-color: black;
  position: absolute;
`;

export const IconFontAwesome = styled(FontAwesome).attrs(({ theme }) => ({
  color: theme.COLORS.BLACK,
}))`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
`;
