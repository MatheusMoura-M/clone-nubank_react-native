import { css } from "styled-components";
import styled from "styled-components/native";

export type BorderActiveProps = {
  borderActive?: boolean;
};

type ActiveTextProps = BorderActiveProps & {
  activeText: boolean;
};

export const Content = styled.View`
  padding-top: 23px;
  padding-bottom: 16px;
`;

export const BoxText = styled.View`
  flex-direction: row;
  gap: 13px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Text = styled.Text<ActiveTextProps>`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme, activeText }) =>
    activeText ? theme.COLORS.PURPLE_DARK_TEXT_2 : theme.COLORS.GRAY_400};
  border-left-width: 1px;
  letter-spacing: 0.1px;
  ${({ borderActive }) =>
    borderActive &&
    css`
      padding-left: 13px;
      border-color: ${({ theme }) => theme.COLORS.GRAY_600};
    `}
`;
