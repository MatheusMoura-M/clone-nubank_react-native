import { css } from "styled-components";
import styled from "styled-components/native";

type TextProps = {
  borderLeftActive?: boolean;
};

export const ContainerTitle = styled.View`
  padding-top: 22px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const SpanMoney = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-top: 2.5px;
`;

export const Content = styled.View`
  padding-top: 23px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const BoxText = styled.View`
  flex-direction: row;
  gap: 13px;
`;

export const Text = styled.Text<TextProps>`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-left-width: 1px;
  letter-spacing: 0.1px;
  ${({ borderLeftActive }) =>
    borderLeftActive &&
    css`
      padding-left: 13px;
      border-color: ${({ theme }) => theme.COLORS.GRAY_600};
    `}
`;
