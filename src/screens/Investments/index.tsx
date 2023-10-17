import Header from "@components/Header";
import { Title } from "./style";
import { useAuth } from "@contexts/index";
import { Container } from "@screens/Home/style";
import { useFocusEffect } from "@react-navigation/native";

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
      <Title onPress={handleHome}>Investments Page</Title>
    </Container>
  );
};

export default Investments;
