import styled from "styled-components/native";
import { MotiView } from "moti";

export const ClickableContainer = styled.TouchableOpacity``;

export const Container = styled(MotiView)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #fff;
  border-radius: 4px;
  z-index: 99;
`;

export const ItemTitle = styled.Text`
  font-size: 17px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: #000;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceText = styled.Text`
  font-size: 18px;
  color: #000;
  margin-top: 3px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
`;
