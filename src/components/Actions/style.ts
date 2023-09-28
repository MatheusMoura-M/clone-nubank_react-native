import styled from "styled-components/native";
import FontAwesome from "react-native-fontawesome";

type ActionProps = {
  marginRight: number;
};

export const Container = styled.ScrollView`
  flex: 1;
  max-height: 110px;
  padding-top: 8px;
  padding-left: 27px;
  padding-right: 22px;
  /* background-color: #ecf0f1; */
`;

export const ActionButton = styled.TouchableOpacity<ActionProps>`
  align-items: center;
  margin-right: ${({ marginRight }) => marginRight}px;
`;

export const AreaButton = styled.View`
  background-color: #ecf0f1;
  /* background-color: #000; */
  width: 71px;
  height: 71px;
  border-radius: 36px;
  align-items: center;
  justify-content: center;
`;

export const LabelButton = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
`;

export const BoxPadlock = styled.View`
  height: 15px;
  align-items: center;
  justify-content: center;
  padding-left: 1px;
`;

export const IconWrapperPadlock = styled.View`
  height: 10.8px;
  overflow: hidden;
`;

export const IconContainerPadlock = styled.View`
  height: 20px;
  width: 15px;
  border-color: black;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const HorizontalLinePadlock = styled.View`
  width: 20px;
  border-color: black;
  border-bottom-width: 2px;
`;

export const BottomRectanglePadlock = styled.View`
  height: 9px;
  width: 18px;
  border-color: black;
  border-width: 2px;
  border-top-width: 0;
  background-color: #ecf0f1;
`;
