import styled from "styled-components/native";
import { MotiText, MotiView } from "moti";

interface ValueTextProps {
  expense: boolean;
}

export const ValueText = styled(MotiText)<ValueTextProps>`
  font-size: 16px;
  font-weight: bold;
  padding-right: 2px;
  color: ${({ expense }) => (expense ? "#e74c3c" : "#2ecc71")};
`;

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: #dadada;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const DateText = styled.Text`
  color: #dadada;
  font-weight: bold;
`;

export const LabelText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const SkeletonView = styled(MotiView)`
  margin-top: 6px;
  width: 80px;
  height: 10px;
  background-color: #dadada;
  border-radius: 8px;
`;
