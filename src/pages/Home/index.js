import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto - conta de luz",
    value: "245,00",
    date: "17/08/2023",
    type: 0, // gastos
  },
  {
    id: 2,
    label: "Pix - Cliente X",
    value: "2.455,50",
    date: "19/08/2023",
    type: 1, // entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "5.455,50",
    date: "25/08/2023",
    type: 1, // entradas
  },
];

export default Home = () => {
  return (
    <View style={styles.container}>
      <Header name={"Matheus Moura"} />

      <Balance saldo={"15.320,40"} gastos={"-390,00"} />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginHorizontal: 14,
  },
});
