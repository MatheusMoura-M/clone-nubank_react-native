import { FlatList } from "react-native";
import Header from "@components/Header";
import Balance from "@components/Balance";
import Movements from "@components/Movements";
import Actions from "@components/Actions";
import { BoxMyCards, Container, Title, TitleMyCards } from "./style";
import { BoxPhone, HorizontalLinePhone } from "@components/Actions/style";

const list = [
  {
    id: 1,
    label: "Boleto - conta de luz",
    value: "245,40",
    date: "17/08/2023",
    type: 0, // gastos
  },
  {
    id: 2,
    label: "Pix - Cliente X",
    value: "2.285,10",
    date: "19/08/2023",
    type: 1, // entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "4.455,50",
    date: "25/08/2023",
    type: 1, // entradas
  },
  {
    id: 4,
    label: "Ração do cachorro",
    value: "133,00",
    date: "15/09/2023",
    type: 0, // gastos
  },
];

const calculateBalance = () => {
  let total = 0;
  list.map((item) => {
    if (item.type === 1) {
      const numberFormated = parseFloat(
        item.value.replace(/\./g, "").replace(",", ".")
      );
      total += numberFormated;
    }
  });

  const stringFormated = total
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "")
    .trim();

  return stringFormated;
};

const calculateExpenses = () => {
  let total = 0;
  list.map((item) => {
    if (item.type === 0) {
      const numberFormated = parseFloat(
        item.value.replace(/\./g, "").replace(",", ".")
      );
      total += numberFormated;
    }
  });

  const stringFormated = total
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "")
    .trim();

  return stringFormated;
};

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

      {/* <Title>Últimas movimentações</Title> */}
      {/* <FlatList
        style={{ marginHorizontal: 14 }}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      /> */}
    </Container>
  );
};

export default Home;
