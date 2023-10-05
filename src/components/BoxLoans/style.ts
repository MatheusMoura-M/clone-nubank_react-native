import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  height: 102px;
  padding-top: 6px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
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