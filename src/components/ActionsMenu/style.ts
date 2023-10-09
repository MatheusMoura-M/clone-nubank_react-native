import styled from "styled-components/native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

type IconContainerProps = {
  condition: boolean;
};

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 65px;
  width: 205px;
  gap: 3px;
`;

export const IconContainer = styled.TouchableOpacity<IconContainerProps>`
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 63px;
  border-radius: 40px;
  background-color: ${({ condition }) =>
    condition ? "#e6d2f070" : "transparent"};
`;

export const DollarSignIconMenu = styled(FontAwesome5)`
  color: #00000090;
`;

export const ChatBubbleIconMenu = styled(MaterialIcons)`
  transform: rotateY(180deg);
  color: #00000090;
`;

export const ArrowLeftIconMenu = styled(Ionicons)`
  position: absolute;
  top: 14px;
  left: 16px;
  color: #00000090;
`;

export const ArrowRightIconMenu = styled(Ionicons)`
  position: absolute;
  top: 22px;
  left: 27px;
  color: #00000090;
  transform: rotateZ(180deg);
`;

export const BagIconMenu = styled(DollarSignIconMenu)`
  color: #00000090;
`;
