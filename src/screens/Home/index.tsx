import Header from "@components/Header";
import Balance from "@components/Balance";
import Actions from "@components/Actions";
import { BoxMyCards, Container, TitleMyCards } from "./style";
import { BoxPhone, HorizontalLinePhone } from "@components/Actions/style";
import BoxInfoScroll from "@components/BoxInfoScroll";
import BoxCreditCard from "@components/BoxCreditCard";
import PaymentAssistant from "@components/BoxPaymentAssistant";
import { calculateBalance } from "@utils/calculateValues";
import BoxLoans from "@components/BoxLoans";
import BoxDiscovery from "@components/BoxDiscovery";
import { View } from "react-native";
import { useAuth } from "@contexts/index";
import { useFocusEffect } from "@react-navigation/native";

const Home = () => {
  const { handleButtonHomePage } = useAuth();

  useFocusEffect(() => {
    handleButtonHomePage(false);
  });

  return (
    <View>
      <Container>
        <Header name={"Matheus Moura"} shortHeader={false} />

        <Balance saldo={calculateBalance()} />

        <Actions />

        <BoxMyCards>
          <BoxPhone height={20} width={16}>
            <HorizontalLinePhone height={3} width={2} top={2.5} right={4} />
          </BoxPhone>
          <TitleMyCards>Meus cartões</TitleMyCards>
        </BoxMyCards>

        <BoxInfoScroll />

        <BoxCreditCard />

        <PaymentAssistant />

        <BoxLoans />

        <BoxDiscovery />
      </Container>
    </View>
  );
};

export default Home;
