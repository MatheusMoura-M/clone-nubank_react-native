import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";

export const Content = styled.View`
  padding: 15px 10px 10px 15px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 57%;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  padding-bottom: 3px;
  margin-top: 3px;
  margin-bottom: 5px;
  letter-spacing: -0.3px;
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  line-height: 20.5px;
  letter-spacing: -0.3px;
  max-width: 204px;
`;

// In BoxPayment
export const IconFontistoPayment = styled(Fontisto).attrs(({ theme }) => ({
  color: theme.COLORS.BLACKTOGGLE,
}))`
  transform: rotateZ(180deg);
`;
