import styled from "styled-components/native";
import { Container } from "@components/BoxPaymentAssistant/style";
import { FontAwesome5 } from "@expo/vector-icons";
import { IconContainerProps } from "@components/ActionsMenu/style";

export const ContainerLoans = styled(Container)`
  height: 102px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  padding-bottom: 3px;
  letter-spacing: -0.2px;
  line-height: 22px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

// In ActionsMenu
export const DollarSignIconMenu = styled(FontAwesome5).attrs(
  {}
)<IconContainerProps>`
  color: ${({ condition, deviceTheme, theme }) =>
    condition
      ? deviceTheme == "dark"
        ? "#b575e0f9"
        : theme.COLORS.PURPLE_DARK
      : deviceTheme == "dark"
      ? "#8c939895"
      : theme.COLORS.GRAY_400};
`;
