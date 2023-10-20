import { DeviceThemeProps } from "@screens/Investments/style";
import styled from "styled-components/native";

export const ContainerMain = styled.View`
  margin-top: 37px;
`;

export const SecondContainer = styled.View``;

export const FirstContainer = styled.View`
  gap: 8px;
  flex-direction: row;
  margin-bottom: 3px;
  padding-bottom: 16px;
  padding-left: 25px;
  padding-right: 25px;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const PurpleBox = styled.View<DeviceThemeProps>`
  width: 120px;
  height: 120px;
  border-radius: 6px;
  background-color: ${({ deviceTheme }) =>
    deviceTheme === "dark" ? "#31104d" : "#ebe2f5"};
  padding-left: 8px;
  padding-bottom: 15px;
  justify-content: flex-end;
`;

export const TextFirstContainer = styled.Text`
  font-size: 21px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK_TEXT_2};
  letter-spacing: -1px;
`;

export const SpanFirstContainer = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK_TEXT_2};
  line-height: 13px;
`;

export const ThirdContainer = styled.View`
  gap: 5px;
  padding-top: 23px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const TextThirdContainer = styled.Text<DeviceThemeProps>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme, deviceTheme }) =>
    deviceTheme === "dark" ? "#a557e6" : theme.COLORS.PURPLE_DARK_TEXT_2};
  letter-spacing: -0.28px;
`;

export const SpanThirdContainer = styled.Text<DeviceThemeProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme, deviceTheme }) =>
    deviceTheme === "dark" ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_400};
  margin-bottom: 10px;
  line-height: 20px;
  letter-spacing: -0.4px;
`;
