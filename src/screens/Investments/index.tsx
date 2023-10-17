import Header from "@components/Header";
import {
  BoxText,
  ContainerTitle,
  Content,
  SpanMoney,
  Text,
  Title,
} from "./style";
import { useAuth } from "@contexts/index";
import { Container } from "@screens/Home/style";
import { useFocusEffect } from "@react-navigation/native";
import ButtonDiscovery from "@components/ButtonDiscovery";
import BoxMyOrganization from "@components/BoxMyOrganization";

const Investments = () => {
  const { handleButtonHomePage, handleButtonMoneyPage } = useAuth();

  const handleHome = () => {
    handleButtonHomePage();
  };

  useFocusEffect(() => {
    handleButtonMoneyPage();
  });

  return (
    <Container>
      <Header name={"Matheus Moura"} />
      <ContainerTitle>
        <Title onPress={handleHome}>Total em investimentos</Title>
        <SpanMoney>R$ 0,00</SpanMoney>

        <ButtonDiscovery
          width={88}
          height={40}
          marginTop={15}
          text="Investir"
        />
      </ContainerTitle>
      <Content>
        <BoxText>
          <Text>Minha organização</Text>
          <Text borderLeftActive>Análise da distribuição</Text>
        </BoxText>

        <BoxMyOrganization />
      </Content>
    </Container>
  );
};

export default Investments;
