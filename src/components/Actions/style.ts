import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import {
  DirectionVariant,
  MarginProps,
  SizeAndPositionProps,
} from "@screens/Home/style";

type AreaButtonProps = {
  flexDirection?: DirectionVariant;
};

export const Container = styled.ScrollView`
  height: 125px;
  max-height: 125px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  margin-bottom: 25px;
`;

export const ActionButton = styled.TouchableOpacity<MarginProps>`
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

export const LabelButton = styled.Text<MarginProps>`
  margin-top: 9px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const LabelButtonRecharge = styled.Text`
  position: absolute;
  bottom: 3px;
  min-width: 78px;
  margin-top: 9px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

// ICON PIX
export const PixContainer = styled.View`
  position: relative;
  width: 18.5px;
  height: 18.5px;
  border-width: 2.2px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  transform: rotateZ(45deg);
`;

export const TopLeftView = styled.View`
  position: absolute;
  top: 4.7px;
  right: 8.1px;
  width: 7px;
  height: 4.8px;
  border-top-width: 2px;
  border-left-width: 2px;
  border-top-left-radius: 90px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  transform: rotateZ(5deg);
`;

export const TopRightView = styled.View`
  position: absolute;
  top: -0.5px;
  right: 3.5px;
  width: 7px;
  height: 4.8px;
  border-top-width: 2px;
  border-right-width: 2px;
  border-top-right-radius: 90px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  transform: rotateZ(260deg);
`;

export const BottomLeftView = styled.View`
  position: absolute;
  bottom: 4px;
  left: 8.3px;
  width: 7px;
  height: 4.8px;
  border-top-width: 2px;
  border-left-width: 2px;
  border-top-left-radius: 90px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  transform: rotateZ(180deg);
`;

export const BottomRightView = styled.View`
  position: absolute;
  bottom: -0.4px;
  left: 4px;
  width: 7px;
  height: 4.8px;
  border-top-width: 2px;
  border-right-width: 2px;
  border-top-right-radius: 90px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  transform: rotateZ(90deg);
`;

// ICON LINES
export const BoxLines = styled.View<SizeAndPositionProps>`
  width: ${({ width }) => (width ? width : 4)}px;
  height: ${({ height }) => (height ? height : 9)}px;
  background-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  margin-right: 1.5px;
`;

// ICON TRANSFERÊNCIA
export const BoxTransfer = styled.View`
  width: 23px;
  height: 14px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  border-width: 2px;
`;

export const IconTransfer = styled.View`
  height: 6.5px;
  width: 6.5px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
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
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  border-width: 2px;
  border-radius: 4px;
`;

export const HorizontalLinePhone = styled.View<SizeAndPositionProps>`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
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
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const HorizontalLinePadlock = styled.View`
  width: 20px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  border-bottom-width: 2px;
`;

export const BottomRectanglePadlock = styled.View`
  height: 9px;
  width: 18px;
  border-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  border-width: 2px;
  border-top-width: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
`;

// ICON NETOWORK
export const BoxLinesNetwork = styled.View<SizeAndPositionProps>`
  width: ${({ width }) => (width ? width : 4)}px;
  height: ${({ height }) => (height ? height : 9)}px;
  background-color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  position: absolute;
`;

export const IconFontAwesome = styled(FontAwesome).attrs(({ theme }) => ({
  color: theme.COLORS.BLACKTOGGLE,
}))`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
`;
