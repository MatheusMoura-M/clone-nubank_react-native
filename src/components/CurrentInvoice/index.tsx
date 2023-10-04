import { View } from "react-native";
import { BoxButtons, SpanDueDate, SubTitle, TextValue } from "./style";
import ButtonCreditCard from "@components/ButtonCreditCard";

const CurrentInvoiceContainer = () => {
  return (
    <View>
      <SubTitle>Fatura fechada</SubTitle>
      <TextValue>R$ 115,89</TextValue>
      <SpanDueDate>Vencimento dia 06</SpanDueDate>
      <BoxButtons>
        <ButtonCreditCard
          width={122}
          height={40}
          text="Pagar fatura"
          backgroundColor={"red"}
          fixedColor={true}
        />
        <ButtonCreditCard
          width={93}
          height={40}
          text="Parcelar"
          backgroundColor={"gray"}
          fixedColor={false}
        />
      </BoxButtons>
    </View>
  );
};

export default CurrentInvoiceContainer;
