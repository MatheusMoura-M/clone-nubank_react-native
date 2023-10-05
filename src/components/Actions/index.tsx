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
  IconFontAwesome,
  IconTransfer,
  IconWrapperPadlock,
  LabelButton,
  LabelButtonRecharge,
} from "./style";
import { Image } from "react-native";
import { IconFontAwesome5 } from "@components/AllInfoBox/style";
import { IconMaterialIcons } from "@screens/Home/style";

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

          <IconFontAwesome name="arrow-up" size={10} top={7} left={12} />
        </BoxTransfer>
      </AreaButton>
      <LabelButton marginRight={3}>Transferir</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton>
        <BoxPhone height={22.5} width={14.5}>
          <HorizontalLinePhone height={2} width={4} bottom={2} left={3} />
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
          <IconFontAwesome name="dollar" size={12} top={-0.4} right={6} />
          <HorizontalLinePadlock />
          <BottomRectanglePadlock />
        </BoxPadlock>
      </AreaButton>
      <LabelButton marginLeft={3}>Caixinhas</LabelButton>
    </ActionButton>

    <ActionButton marginRight={11}>
      <AreaButton>
        <IconMaterialIcons
          name="chat-bubble-outline"
          size={25}
          style={{
            transform: [{ rotateY: "180deg" }],
          }}
        />
        <IconFontAwesome5 name="dollar-sign" size={11} top={28} />
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

          <IconFontAwesome
            name="arrow-up"
            size={10}
            top={7}
            left={12}
            style={{
              transform: [{ rotateZ: "180deg" }],
            }}
          />
        </BoxTransfer>
      </AreaButton>
      <LabelButton>Depositar</LabelButton>
    </ActionButton>

    <ActionButton marginRight={55}>
      <AreaButton>
        <Image
          source={require("../../assets/world.png")}
          style={{ width: 25, height: 25 }}
        />

        <IconFontAwesome name="arrow-up" size={11} bottom={22} right={23.2} />
      </AreaButton>
      <LabelButton>Ultimo</LabelButton>
    </ActionButton>
  </Container>
);

export default Actions;
