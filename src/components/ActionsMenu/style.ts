import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

type deviceVariant = "dark" | "light" | null | undefined;

export type IconContainerProps = {
  condition?: boolean;
  deviceTheme?: deviceVariant;
};

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 65px;
  width: 205px;
  gap: 3px;
`;

export const IconContainer = styled.TouchableOpacity<IconContainerProps>`
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 63px;
  border-radius: 40px;
  background-color: ${({ condition, deviceTheme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#310e4b"
        : "#e6d2f070"
      : "transparent"};
`;

export const BagContainer = styled.View`
  position: absolute;
  bottom: 17px;
  overflow: hidden;
`;

export const BagStrap = styled.View<IconContainerProps>`
  align-self: center;
  border-color: ${({ theme, condition, deviceTheme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#b989daf8"
        : "#820ad1"
      : deviceTheme == "dark"
      ? "#8c939895"
      : theme.COLORS.GRAY_400};
  z-index: 2;
  height: 6px;
  width: 9px;
  border-top-width: 2.5px;
  border-left-width: 2.5px;
  border-right-width: 2.5px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Bag = styled.View<IconContainerProps>`
  height: 14.5px;
  width: 18px;
  border-bottom-width: 2.2px;
  border-left-width: 2.2px;
  border-right-width: 2.2px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-color: ${({ theme, condition, deviceTheme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#b989daf8"
        : "#820ad1"
      : deviceTheme == "dark"
      ? "#8c939895"
      : theme.COLORS.GRAY_400};
  background-color: ${({ condition, deviceTheme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#b989daf8"
        : "#820ad1"
      : "transparent"};
`;

export const EmptyPart = styled.View<IconContainerProps>`
  position: absolute;
  bottom: 7.5px;
  left: 0.7px;
  height: 20px;
  width: 13px;
  border-radius: 10px;
  background-color: ${({ condition, deviceTheme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#310e4b"
        : "#e2caee"
      : "transparent"};
`;

export const ArrowLeftIconMenu = styled(Ionicons).attrs({})<IconContainerProps>`
  position: absolute;
  top: 14px;
  left: 16px;
  color: ${({ condition, deviceTheme, theme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#b575e0f9"
        : theme.COLORS.PURPLE_DARK
      : deviceTheme == "dark"
      ? "#8c939895"
      : theme.COLORS.GRAY_400};
`;
