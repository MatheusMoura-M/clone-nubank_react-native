import Header from "@components/Header";
import { Title } from "./style";
import { useAuth } from "@contexts/index";
import { Container } from "@screens/Home/style";
import { useFocusEffect } from "@react-navigation/native";

const Shopping = () => {
  const { handleButtonHomePage, handleButtonShoppingPage } = useAuth();

  const handleHome = () => {
    handleButtonHomePage();
  };

  useFocusEffect(() => {
    handleButtonShoppingPage();
  });

  return (
    <Container>
      <Header name={"Matheus Moura"} />
      <Title onPress={handleHome}>Shopping Page</Title>
    </Container>
  );
};

export default Shopping;
