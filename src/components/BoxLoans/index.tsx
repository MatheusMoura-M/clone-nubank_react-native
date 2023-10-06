import { IconMaterialIconsCreditCard } from "@components/BoxCreditCard/style";
import { ContainerLoans, SubTitle, Title } from "./style";

const BoxLoans = () => {
  return (
    <ContainerLoans>
      <Title>Empréstimo</Title>
      <SubTitle>
        Crie um aviso para saber quando um empréstimo ficar disponível para voce
      </SubTitle>

      <IconMaterialIconsCreditCard name="keyboard-arrow-right" size={24} />
    </ContainerLoans>
  );
};

export default BoxLoans;
