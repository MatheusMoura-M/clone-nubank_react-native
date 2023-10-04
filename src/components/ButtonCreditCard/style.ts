import styled from "styled-components/native";
import { SizeAndPositionProps } from "@screens/Home/style";

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
