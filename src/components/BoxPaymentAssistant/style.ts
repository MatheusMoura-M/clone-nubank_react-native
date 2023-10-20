import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  height: 120px;
  padding-top: 6px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const BoxPaymentAssistant = styled.View`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  height: 57px;
  margin-left: 20px;
  margin-right: 25px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_DEFAULT};
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  padding-bottom: 3px;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const SpanNew = styled.Text`
  position: absolute;
  top: 22px;
  right: 15px;
  width: 38px;
  height: 17px;
  text-align: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 11.7px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;

export const IconFontAwesome5Payment = styled(FontAwesome5).attrs(
  ({ theme }) => ({
    color: theme.COLORS.BLACKTOGGLE,
  })
)`
  position: absolute;
  top: 22.5px;
  left: 27px;
`;
