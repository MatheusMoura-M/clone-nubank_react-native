import React from "react";
import { View } from "react-native";
import {
  Container,
  ItemTitle,
  Content,
  BalanceText,
  ClickableContainer,
} from "./style";

import { MaterialIcons } from "@expo/vector-icons";

type PropsBalance = {
  saldo: string;
  gastos: string;
};

const Balance = ({ saldo, gastos }: PropsBalance) => {
  return (
    <ClickableContainer>
      <Container
        from={{ rotateX: "-100deg", opacity: 0 }}
        animate={{ rotateX: "0deg", opacity: 1 }}
        transition={{ type: "timing", delay: 300, duration: 900 }}
      >
        <View>
          <ItemTitle>Conta</ItemTitle>
          <Content>
            <BalanceText>R$ {saldo}</BalanceText>
            {/* <BalanceText>R$ 73,84</BalanceText> */}
          </Content>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} color="#696767" />
      </Container>
    </ClickableContainer>
  );
};

export default Balance;
