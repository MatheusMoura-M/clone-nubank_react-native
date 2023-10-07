import Header from "@components/Header";
import { Container } from "./style";
import { useNavigation } from "@react-navigation/native";

const Teste = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('home');
  };

  return (
    <Container onPress={handleHome}>
      <Header name={"Matheus Moura"} />
    </Container>
  );
};

export default Teste;
