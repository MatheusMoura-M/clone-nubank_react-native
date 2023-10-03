import Header from "@components/Header";
import Balance from "@components/Balance";
import Actions from "@components/Actions";
import { BoxMyCards, Container, TitleMyCards } from "./style";
import { BoxPhone, HorizontalLinePhone } from "@components/Actions/style";
import BoxInfoScroll from "@components/BoxInfoScroll";
import BoxCreditCard from "@components/BoxCreditCard";
import PaymentAssistant from "@components/BoxPaymentAssistant";
import { calculateBalance, calculateExpenses } from "@utils/calculateValues";
import BoxLoans from "@components/BoxLoans";

const Home = () => {
  return (
    <Container>
      <Header name={"Matheus Moura"} />

      <Balance saldo={calculateBalance()} gastos={calculateExpenses()} />

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
    </Container>
  );
};

export default Home;
