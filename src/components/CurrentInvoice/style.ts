import styled from "styled-components/native";

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  margin-bottom: 4px;
`;

export const TextValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 16px;
`;

export const SpanDueDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.LIGHT};
`;

export const BoxButtons = styled.View`
  margin-top: 17px;
  flex-direction: row;
  gap: 8px;
`;
