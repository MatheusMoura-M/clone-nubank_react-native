import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  padding-top: 6px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 4px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.REGULAR};
  padding-bottom: 3px;
  letter-spacing: -0.2px;
  line-height: 22px;
`;
