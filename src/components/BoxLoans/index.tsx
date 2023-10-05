import { IconMaterialIconsCreditCard } from "@components/BoxCreditCard/style";
import { Container, SubTitle, Title } from "./style";

const BoxLoans = () => {
  return (
    <Container>
      <Title>Empréstimo</Title>
      <SubTitle>
        Crie um aviso para saber quando um empréstimo ficar disponível para voce
      </SubTitle>

      <IconMaterialIconsCreditCard name="keyboard-arrow-right" size={24} />
    </Container>
  );
};

export default BoxLoans;
