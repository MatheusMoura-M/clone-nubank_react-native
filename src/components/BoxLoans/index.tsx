import { Container, SubTitle, Title } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

const BoxLoans = () => {
  return (
    <Container>
      <Title>Empréstimo</Title>
      <SubTitle>
        Crie um aviso para saber quando um empréstimo ficar disponível para voce
      </SubTitle>

      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="#696767"
        style={{ position: "absolute", top: 7, right: 23 }}
      />
    </Container>
  );
};

export default BoxLoans;
