import styled from "styled-components/native";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

export const InnerContainer = styled.View`
  position: relative;
  height: 19px;
  width: 21px;
  overflow: hidden;
`;

export const IconWrapper = styled(IconMaterial)`
  position: absolute;
  bottom: -0.5px;
  right: 2px;
`;

export const Square = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 11px;
  height: 11px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
`;

export const Line = styled.View`
  position: absolute;
  top: 0.5px;
  left: 5px;
  width: 2.3px;
  height: 9px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RotatedLine = styled(Line)`
  transform: rotate(90deg);
`;

export const Circle = styled.View`
  position: absolute;
  top: 3.5px;
  left: 4.5px;
  width: 3px;
  height: 3px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  transform: rotate(90deg);
`;
