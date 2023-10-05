import styled from "styled-components/native";

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const TextValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const SpanDueDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.LIGHT};
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
  margin-bottom: 2px;
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK_TEXT};
`;

export const BoxButtons = styled.View`
  margin-top: 17px;
  flex-direction: row;
  gap: 8px;
`;
