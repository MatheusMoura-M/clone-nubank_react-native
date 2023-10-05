import CurrentInvoiceContainer from "@components/CurrentInvoice";
import { Container, IconMaterialIconsCreditCard, Title } from "./style";

const BoxCreditCard = () => {
  return (
    <Container activeOpacity={0.5}>
      <Title>Cartão de crédito</Title>

      <CurrentInvoiceContainer />

      <IconMaterialIconsCreditCard name="keyboard-arrow-right" size={24} />
    </Container>
  );
};

export default BoxCreditCard;
