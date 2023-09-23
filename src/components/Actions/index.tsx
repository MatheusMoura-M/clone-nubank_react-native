import { AntDesign } from "@expo/vector-icons";
import { ActionButton, AreaButton, Container, LabelButton } from "./style";

const Actions = () => {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <ActionButton>
        <AreaButton>
          <AntDesign name="addfolder" size={26} color={"#000"} />
        </AreaButton>
        <LabelButton>Entradas</LabelButton>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="tagso" size={26} color={"#000"} />
        </AreaButton>
        <LabelButton>Compras</LabelButton>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="creditcard" size={26} color={"#000"} />
        </AreaButton>
        <LabelButton>Carteira</LabelButton>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="barcode" size={26} color={"#000"} />
        </AreaButton>
        <LabelButton>Boletos</LabelButton>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="setting" size={26} color={"#000"} />
        </AreaButton>
        <LabelButton>Conta</LabelButton>
      </ActionButton>
    </Container>
  );
};

export default Actions;
