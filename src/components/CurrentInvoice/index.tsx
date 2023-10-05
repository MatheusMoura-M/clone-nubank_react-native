import { View } from "react-native";
import { BoxButtons, Span, SpanDueDate, SubTitle, TextValue } from "./style";
import ButtonCreditCard from "@components/ButtonCreditCard";

const CurrentInvoiceContainer = () => {
  return (
    <View>
      <SubTitle>Fatura atual</SubTitle>
      <TextValue>R$ 430,01</TextValue>
      <SpanDueDate>Limite disponível de R$ 769,99</SpanDueDate>
      <SpanDueDate>
        Limite adicional para Pix e boletos: <Span>R$ 550,00</Span>
      </SpanDueDate>
      <BoxButtons>
        <ButtonCreditCard
          width={117}
          height={40}
          text="Renegociar"
          backgroundColor={"gray"}
          fixedColor={false}
        />
      </BoxButtons>
    </View>
  );
};

export default CurrentInvoiceContainer;
