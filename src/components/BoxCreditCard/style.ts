import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  height: 215px;
  padding-top: 7px;
  padding-left: 25px;
  padding-right: 22px;
  margin-top: 16px;
  border-bottom-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.GRAPHIK.MEDIUM};
  margin-bottom: 14px;
  color: ${({ theme }) => theme.COLORS.BLACKTOGGLE};
`;

export const IconMaterialIconsCreditCard = styled(MaterialIcons).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_400,
  })
)`
  position: absolute;
  top: 7px;
  right: 23px;
`;
