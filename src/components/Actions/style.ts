import styled from "styled-components/native";

export const Container = styled.ScrollView`
  max-height: 84px;
  margin-bottom: 14px;
  margin-top: 18px;
  padding-left: 14px;
  padding-right: 14px;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  margin-right: 32px;
`;

export const AreaButton = styled.View`
  background-color: #ecf0f1;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const LabelButton = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
`;
