import { View } from "react-native";
import { SpanDueDate, SubTitle, TextValue } from "./style";

const ClosedInvoiceContainer = () => {
  return (
    <View>
      <SubTitle>Fatura fechada</SubTitle>
      <TextValue>R$ 115,89</TextValue>
      <SpanDueDate>Vencimento dia 06</SpanDueDate>
    </View>
  );
};

export default ClosedInvoiceContainer;
