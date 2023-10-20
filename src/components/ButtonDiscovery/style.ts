import styled from "styled-components/native";
import { MarginProps, SizeAndPositionProps } from "@screens/Home/style";

type ButtonProps = {
  fontSize?: number;
  paddingTop?: number;
};

export const ButtonContainer = styled.TouchableOpacity<
  SizeAndPositionProps & MarginProps
>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 21)}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  border-radius: 22px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 8)}px;
`;
