import { View } from "react-native";
import {
  Container,
  ItemTitle,
  Content,
  BalanceText,
  ClickableContainer,
  IconMaterialIconsBalance,
} from "./style";
import { useAuth } from "@contexts/index";
import HideValue from "@components/HideValue";

type PropsBalance = {
  saldo: string;
  gastos: string;
};

const Balance = ({ saldo, gastos }: PropsBalance) => {
  const { visibleValues } = useAuth();

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
            {visibleValues ? (
              <BalanceText>R$ {saldo}</BalanceText>
            ) : (
              <HideValue
                width={8}
                height={8}
                backgroundColor="white"
                marginTop={8}
                marginLeft={2}
              />
            )}
          </Content>
        </View>

        <IconMaterialIconsBalance name="keyboard-arrow-right" size={24} />
      </Container>
    </ClickableContainer>
  );
};

export default Balance;
