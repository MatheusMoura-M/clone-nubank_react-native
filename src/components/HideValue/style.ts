import { MarginProps, SizeAndPositionProps } from "@screens/Home/style";
import styled from "styled-components/native";

export type BackgroundVariant = "gray" | "white";

type BoxProps = SizeAndPositionProps & {
  backgroundColor: BackgroundVariant;
};

export const Container = styled.View<MarginProps>`
  flex-direction: row;
  gap: 2.5px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const Box = styled.View<BoxProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor == "white"
      ? theme.COLORS.BLACKTOGGLE
      : theme.COLORS.GRAY_400};
`;
