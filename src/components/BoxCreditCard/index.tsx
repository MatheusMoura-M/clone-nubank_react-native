import CurrentInvoiceContainer from "@components/CurrentInvoice";
import { Container, Title } from "./style";

import { MaterialIcons } from "@expo/vector-icons";

const BoxCreditCard = () => {
  return (
    <Container activeOpacity={0.5}>
      <Title>Cartão de crédito</Title>

      <CurrentInvoiceContainer />

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
