import {
  BoxButtons,
  Button,
  Container,
  SpanDueDate,
  SubTitle,
  TextButton,
  TextValue,
  Title,
} from "./style";

import { MaterialIcons } from "@expo/vector-icons";

const BoxCreditCard = () => {
  return (
    <Container activeOpacity={0.5}>
      <Title>Cartão de crédito</Title>
      <SubTitle>Fatura fechada</SubTitle>
      <TextValue>R$ 115,89</TextValue>
      <SpanDueDate>Vencimento dia 06</SpanDueDate>
      <BoxButtons>
        <Button backgroundColor={"red"} width={122} height={40}>
          <TextButton fixedColor={true}>Pagar fatura</TextButton>
        </Button>
        <Button backgroundColor={"gray"} width={93} height={40}>
          <TextButton fixedColor={false}>Parcelar</TextButton>
        </Button>
      </BoxButtons>

      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="#696767"
        style={{ position: "absolute", top: 7, right: 23 }}
      />
    </Container>
  );
};

export default BoxCreditCard;
