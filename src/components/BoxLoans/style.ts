import styled from "styled-components/native";
import { Container } from "@components/BoxPaymentAssistant/style";

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
