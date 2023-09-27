import styled from "styled-components/native";
import { MotiView, MotiText } from "moti";

type ContainerProps = {
  statusBarHeight: number;
};

type IconContainerProps = {
  paddingTop: number;
};

type LashProps = {
  top: number;
  left: number;
  transformRotate: number;
};

type IconCircleProps = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export const Container = styled.View<ContainerProps>`
  background-color: #820ad1;
  padding-top: ${({ statusBarHeight }) => statusBarHeight - 10}px;
  height: 190px;
`;

export const Content = styled(MotiView)`
  flex: 1;
  flex-direction: row;
`;

export const BoxStart = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
`;

export const BoxEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  gap: 25px;
  padding-top: 14px;
  padding-right: 36px;
  /* background-color: burlywood; */
`;

export const IconContainer = styled.View<IconContainerProps>`
  padding-top: ${({ paddingTop }) => paddingTop}px;
`;

// Icon Eye-on
export const IconEyeBox = styled.View`
  height: 8px;
  overflow: hidden;
`;

export const IconEye = styled.View`
  flex: 1;
  min-height: 35px;
  width: 23px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
`;

export const IconEyeCircle = styled.View<IconCircleProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 2px solid white;
  border-radius: 5px;
`;

// Icon Eye-off
export const EyeClosed = styled.View`
  position: relative;
  width: 23px;
  height: 18px;
  overflow: hidden;
`;

export const Lashes = styled.View`
  position: absolute;
  border: 2px solid white;
  border-radius: 50px;
  border-top-width: 0;
  width: 24px;
  height: 30px;
  bottom: 10px;
`;

export const Lash = styled.View<LashProps>`
  position: absolute;
  width: 2.5px;
  height: 2px;
  background-color: white;
  transform: rotate(${({ transformRotate }) => transformRotate}deg);
`;

export const CurvedLine = styled.View`
  width: 6px;
  height: 7px;
  border-top-width: 2px;
  border-left-width: 2px;
  border-top-left-radius: 30px;
  border-color: white;
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
