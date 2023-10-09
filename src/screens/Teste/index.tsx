import Header from "@components/Header";
import { Container } from "./style";
import { useNavigation } from "@react-navigation/native";
import { HomeTesteScreenNavigationProp } from "src/@types";
import { useAuth } from "@contexts/index";

const Teste = () => {
  const { navigation } = useAuth();

  const handleHome = () => {
    navigation.navigate("teste");
  };

  return (
    <Container onPress={handleHome}>
      <Header name={"Matheus Moura"} />
    </Container>
  );
};

export default Teste;
