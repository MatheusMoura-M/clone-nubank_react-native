import React from "react";
import { View } from "react-native";
import {
  Container,
  ItemTitle,
  Content,
  CurrencySymbol,
  BalanceText,
  ExpensesText,
} from "./style";

type PropsBalance = {
  saldo: string;
  gastos: string;
};

const Balance = ({ saldo, gastos }: PropsBalance) => {
  return (
    <Container
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{ rotateX: "0deg", opacity: 1 }}
      transition={{ type: "timing", delay: 300, duration: 900 }}
    >
      <View>
        <ItemTitle>Saldo</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <BalanceText>{saldo}</BalanceText>
        </Content>
      </View>

      <View>
        <ItemTitle>Gastos</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <ExpensesText>{`-${gastos}`}</ExpensesText>
        </Content>
      </View>
    </Container>
  );
};

export default Balance;
