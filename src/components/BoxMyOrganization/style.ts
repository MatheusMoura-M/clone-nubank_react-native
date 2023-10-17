import styled from "styled-components/native";

export const ContainerMain = styled.View`
  margin-top: 37px;
`;

export const FirstContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const PurpleBox = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 6px;
  background-color: #31104d;
  padding-left: 8px;
  padding-bottom: 15px;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  font-size: 21px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: #bb70ee;
  letter-spacing: -1px;
`;

export const Span = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: #bb70ee;
  line-height: 13px;
`;
