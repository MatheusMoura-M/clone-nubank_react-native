import styled from "styled-components/native";
import { SizeAndPositionProps } from "@screens/Home/style";

export const ButtonContainer = styled.TouchableOpacity<SizeAndPositionProps>`
  margin-top: 21px;
  background-color: red;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  border-radius: 22px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 4px;
  text-align: center;
  padding-top: 8px;
`;
