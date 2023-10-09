import Header from "@components/Header";
import { Container } from "./style";
import { useAuth } from "@contexts/index";

const Account = () => {
  const { navigation } = useAuth();

  const handleHome = () => {
    navigation.navigate("home");
  };

  return (
    <Container onPress={handleHome}>
      <Header name={"Matheus Moura"} />
    </Container>
  );
};

export default Account;
