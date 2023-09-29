import {
  ActionButton,
  AreaButton,
  BottomRectanglePadlock,
  BoxLines,
  BoxLinesNetwork,
  BoxPadlock,
  BoxPhone,
  BoxTransfer,
  Container,
  HorizontalLinePadlock,
  HorizontalLinePhone,
  IconContainerPadlock,
  IconTransfer,
  IconWrapperPadlock,
  LabelButton,
  LabelButtonRecharge,
} from "./style";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Actions = () => (
  <Container horizontal={true} showsHorizontalScrollIndicator={false}>
    <ActionButton marginRight={11}>
      <AreaButton>
        <Image
          source={require("../../assets/pix.png")}
          style={{ width: 25, height: 25 }}
        />
      </AreaButton>
      <LabelButton>Área Pix</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton flexDirection="row">
        <BoxLines width={2.5} />
        <BoxLines />
        <BoxLines width={2.5} />
        <BoxLines />
      </AreaButton>
      <LabelButton>Pagar</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton>
        <BoxTransfer>
          <IconTransfer />

          <FontAwesome
            name="arrow-up"
            size={10}
            color="black"
            style={{
              position: "absolute",
              top: 7,
              left: 12,
              backgroundColor: "#ecf0f1",
            }}
          />
        </BoxTransfer>
      </AreaButton>
      <LabelButton marginRight={3}>Transferir</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton>
        <BoxPhone>
          <HorizontalLinePhone />
        </BoxPhone>
      </AreaButton>
      <LabelButtonRecharge>Recarga de celular</LabelButtonRecharge>
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
      <LabelButton marginLeft={3}>Caixinhas</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton>
        <MaterialIcons
          name="chat-bubble-outline"
          size={25}
          color="black"
          style={{
            transform: [{ rotateY: "180deg" }],
          }}
        />
        <FontAwesome5
          name="dollar-sign"
          size={11}
          color="black"
          style={{ position: "absolute", top: 28 }}
        />
      </AreaButton>
      <LabelButton>Cobrar</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton flexDirection="row">
        <BoxLinesNetwork height={4} width={1.8} left={27.5} bottom={27} />
        <BoxLinesNetwork height={8.2} width={1.8} left={31} bottom={27} />
        <BoxLinesNetwork height={12} width={1.8} left={34.8} bottom={26.9} />
        <BoxLinesNetwork height={16} width={1.8} left={38.3} bottom={26.9} />
      </AreaButton>
      <LabelButton>Investir</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton>
        <BoxTransfer>
          <IconTransfer />

          <FontAwesome
            name="arrow-up"
            size={10}
            color="black"
            style={{
              position: "absolute",
              top: 7,
              left: 12,
              backgroundColor: "#ecf0f1",
              transform: [{ rotateZ: "180deg" }],
            }}
          />
        </BoxTransfer>
      </AreaButton>
      <LabelButton>Depositar</LabelButton>
    </ActionButton>

    <ActionButton marginRight={55}>
      <AreaButton></AreaButton>
      <LabelButton>Ultimo</LabelButton>
    </ActionButton>
  </Container>
);

export default Actions;
