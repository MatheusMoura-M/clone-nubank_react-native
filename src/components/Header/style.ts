import styled from "styled-components/native";
import { MotiView, MotiText } from "moti";

export const Container = styled.View`
  background-color: #5f259f;
  padding-top: ${({ statusBarHeight }: { statusBarHeight: number }) =>
    statusBarHeight}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 44px;
  flex-direction: row;
`;

export const Content = styled(MotiView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Username = styled(MotiText)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;
