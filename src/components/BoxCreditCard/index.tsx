import CurrentInvoiceContainer from "@components/CurrentInvoice";
import { Container, IconMaterialIconsCreditCard, Title } from "./style";
import ClosedInvoiceContainer from "@components/ClosedInvoice";

export type CreditCardType = {
  currentInvoice: boolean;
};

const BoxCreditCard = ({ currentInvoice }: CreditCardType) => {
  return (
    <Container activeOpacity={0.5} currentInvoice={currentInvoice}>
      <Title>Cartão de crédito</Title>

      <CurrentInvoiceContainer />
      {/* <ClosedInvoiceContainer /> */}

      <IconMaterialIconsCreditCard name="keyboard-arrow-right" size={24} />
    </Container>
  );
};

export default BoxCreditCard;
