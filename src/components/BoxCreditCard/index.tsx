import CurrentInvoiceContainer from "@components/CurrentInvoice";
import { Container, IconMaterialIconsCreditCard, Title } from "./style";
import ClosedInvoiceContainer from "@components/ClosedInvoice";
import { useAuth } from "@contexts/index";

const BoxCreditCard = () => {
  const { currentInvoice } = useAuth();

  return (
    <Container activeOpacity={0.5} currentInvoice={currentInvoice}>
      <Title>Cartão de crédito</Title>

      {currentInvoice ? (
        <CurrentInvoiceContainer />
      ) : (
        <ClosedInvoiceContainer />
      )}

      <IconMaterialIconsCreditCard name="keyboard-arrow-right" size={24} />
    </Container>
  );
};

export default BoxCreditCard;
