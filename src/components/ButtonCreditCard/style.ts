import styled from "styled-components/native";
import { SizeAndPositionProps } from "@screens/Home/style";
import { Ionicons } from "@expo/vector-icons";
import { IconContainerProps } from "@components/ActionsMenu/style";

export type BackgroundVariant = "red" | "gray";

type ButtonProps = SizeAndPositionProps & {
  backgroundColor: BackgroundVariant;
};

type TextButtonProps = {
  fixedColor: boolean;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  padding-bottom: 5px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor == "red" ? "#cb0707" : theme.COLORS.GRAY_DEFAULT};
`;

export const ButtonText = styled.Text<TextButtonProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ fixedColor, theme }) =>
    fixedColor ? theme.COLORS.WHITE : theme.COLORS.BLACKTOGGLE};
  text-align: center;
`;

// In ActionsMenu
export const ArrowRightIconMenu = styled(Ionicons).attrs(
  {}
)<IconContainerProps>`
  position: absolute;
  top: 22px;
  left: 27px;
  transform: rotateZ(180deg);
  color: ${({ condition, deviceTheme, theme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#b575e0f9"
        : theme.COLORS.PURPLE_DARK
      : deviceTheme == "dark"
      ? "#8c939895"
      : theme.COLORS.GRAY_400};
`;
