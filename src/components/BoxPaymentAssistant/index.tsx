import { IconFontistoPayment } from "@components/BoxContentDiscovery/style";
import {
  BoxPaymentAssistant,
  Container,
  IconFontAwesome5Payment,
  SpanNew,
  SubTitle,
  Title,
} from "./style";
import { Fontisto } from "@expo/vector-icons";

const PaymentAssistant = () => {
  return (
    <Container>
      <Title>Acompanhe também</Title>
      <BoxPaymentAssistant>
        <IconFontistoPayment name="spinner-rotate-forward" size={20} />
        <IconFontAwesome5Payment name="dollar-sign" size={11} />

        <SubTitle>Assistente de pagamentos</SubTitle>

        <SpanNew>Novo</SpanNew>
      </BoxPaymentAssistant>
    </Container>
  );
};

export default PaymentAssistant;
