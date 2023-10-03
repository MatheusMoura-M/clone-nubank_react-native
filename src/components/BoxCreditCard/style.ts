import { SizeAndPositionProps } from "@screens/Home/style";
import styled from "styled-components/native";

type BackgroundVariant = "red" | "gray";

type ButtonProps = SizeAndPositionProps & {
  backgroundColor: BackgroundVariant;
};

type TextButtonProps = {
  fixedColor: boolean;
};

export const Container = styled.TouchableOpacity`
  height: 215px;
  padding-top: 7px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  /* background-color: red; */
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 14px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  margin-bottom: 4px;
`;

export const TextValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 16px;
`;

export const SpanDueDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.LIGHT};
`;

export const BoxButtons = styled.View`
  margin-top: 17px;
  flex-direction: row;
  gap: 8px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding-bottom: 5px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor == "red" ? "#cb0707" : theme.COLORS.GRAY_200};
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ fixedColor, theme }) =>
    fixedColor ? theme.COLORS.WHITE : theme.COLORS.BLACKTOGGLE};
  text-align: center;
`;
