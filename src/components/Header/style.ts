import styled from "styled-components/native";
import { MotiView, MotiText } from "moti";

interface ContainerProps {
  statusBarHeight: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: #820ad1;
  padding-top: ${({ statusBarHeight }) => statusBarHeight - 10}px;
  height: 190px;
`;

export const Content = styled(MotiView)`
  flex: 1;
  flex-direction: row;
  /* background-color: #000; */
`;

export const BoxStart = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: #000; */
`;

export const BoxEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  /* background-color: red; */
  padding-top: 16px;
`;

export const IconEye = styled.View`
  flex: 1;
  min-height: 35px;
  width: 23px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
`;

export const IconEyeContainer = styled.View`
  height: 8px;
  overflow: hidden;
`;

export const IconEyeCircle = styled.View`
  position: absolute;
  top: 4px;
  left: 7.5px;
  width: 8px;
  height: 8px;
  border: 2px solid white;
  border-radius: 5px;
`;

export const Username = styled(MotiText)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
  padding-left: 22px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;

export const ButtonUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  margin-left: 16px;
`;
