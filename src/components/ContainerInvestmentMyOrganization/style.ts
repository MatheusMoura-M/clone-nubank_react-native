import { BorderActiveProps } from "@screens/Investments/style";
import { css } from "styled-components";
import styled from "styled-components/native";

export const ContainerTitle = styled.View<BorderActiveProps>`
  flex: 1;
  padding-top: 22px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  ${({ borderActive }) =>
    borderActive &&
    css`
      border-bottom-width: 1.5px;
      border-color: ${({ theme }) => theme.COLORS.GRAY_200};
    `}
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
