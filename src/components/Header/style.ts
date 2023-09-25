import styled from "styled-components/native";
import { MotiView, MotiText } from "moti";
import { ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  statusBarHeight: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: #820ad1;
  padding-top: ${({ statusBarHeight }) => {
    console.log(statusBarHeight);
    return statusBarHeight;
  }}px;
  padding-left: 22px;
  padding-right: 22px;
  /* padding-bottom: 44px; */
  height: 190px;
  flex-direction: row;
`;

export const Content = styled(MotiView)`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  /* background-color: #000; */
`;

export const Username = styled(MotiText)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  /* background-color: red; */
  /* margin-top: 65px; */
  margin-bottom: 20px;
`;

export const ButtonUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;
