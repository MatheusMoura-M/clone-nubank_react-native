import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ActionButton,
  AreaButton,
  BottomRectanglePadlock,
  BoxPadlock,
  Container,
  HorizontalLinePadlock,
  IconContainerPadlock,
  IconWrapperPadlock,
  LabelButton,
} from "./style";
import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Actions = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <ActionButton marginRight={11}>
        <AreaButton>
          <Image
            source={require("../../assets/pix.png")}
            style={{ width: 25, height: 25 }}
          />
        </AreaButton>
        <LabelButton>Pix</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton>
          <MaterialCommunityIcons name="barcode" size={26} color="black" />
        </AreaButton>
        <LabelButton>Boletos</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton>
          <Foundation name="arrow-up" size={24} color="black" />
        </AreaButton>
        <LabelButton>Entradas</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton>
          <Feather name="smartphone" size={26} color="black" />
        </AreaButton>
        <LabelButton>Recarga</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton>
          <BoxPadlock>
            <IconWrapperPadlock>
              <IconContainerPadlock />
            </IconWrapperPadlock>
            <FontAwesome
              name="dollar"
              size={12}
              color="black"
              style={{ position: "absolute", right: 6, top: -0.4 }}
            />
            <HorizontalLinePadlock />
            <BottomRectanglePadlock />
          </BoxPadlock>
        </AreaButton>
        <LabelButton>Caixinhas</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton></AreaButton>
        <LabelButton>Recarga</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton></AreaButton>
        <LabelButton>Recarga</LabelButton>
      </ActionButton>

      <ActionButton marginRight={11}>
        <AreaButton></AreaButton>
        <LabelButton>Recarga</LabelButton>
      </ActionButton>

      <ActionButton marginRight={55}>
        <AreaButton></AreaButton>
        <LabelButton>Ultimo</LabelButton>
      </ActionButton>
    </Container>
  );
};

export default Actions;
