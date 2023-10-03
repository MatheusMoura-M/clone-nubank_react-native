import {
  BoxPaymentAssistant,
  Container,
  SpanNew,
  SubTitle,
  Title,
} from "./style";
import { Fontisto, FontAwesome5 } from "@expo/vector-icons";

const PaymentAssistant = () => {
  return (
    <Container>
      <Title>Acompanhe também</Title>
      <BoxPaymentAssistant>
        <Fontisto
          name="spinner-rotate-forward"
          size={20}
          color="black"
          style={{ transform: [{ rotateZ: "180deg" }] }}
        />
        <FontAwesome5
          name="dollar-sign"
          size={11}
          style={{ position: "absolute" }}
          top={22.5}
          left={27}
        />

        <SubTitle>Assistente de pagamentos</SubTitle>

        <SpanNew>Novo</SpanNew>
      </BoxPaymentAssistant>
    </Container>
  );
};

export default PaymentAssistant;
