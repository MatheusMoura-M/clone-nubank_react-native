import Header from "@components/Header";
import { Title } from "./style";
import { useAuth } from "@contexts/index";
import { Container } from "@screens/Home/style";

const Account = () => {
  const { handleButtonHomePage } = useAuth();

  const handleHome = () => {
    handleButtonHomePage();
  };

  return (
    <Container>
      <Header name={"Matheus Moura"} />
      <Title onPress={handleHome}>Account Page</Title>
    </Container>
  );
};

export default Account;
