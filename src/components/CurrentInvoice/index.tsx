import { View } from "react-native";
import { BoxButtons, Span, SpanDueDate, SubTitle, TextValue } from "./style";
import ButtonCreditCard from "@components/ButtonCreditCard";
import { useAuth } from "@contexts/index";
import HideValue from "@components/HideValue";

const CurrentInvoiceContainer = () => {
  const { visibleValues } = useAuth();

  return (
    <View>
      <SubTitle>Fatura atual</SubTitle>
      {visibleValues ? (
        <TextValue>R$ 430,01</TextValue>
      ) : (
        <HideValue
          width={8}
          height={8}
          backgroundColor="white"
          marginBottom={28.5}
          marginTop={4}
          marginLeft={2}
        />
      )}

      <SpanDueDate>
        Limite disponível de{" "}
        {visibleValues ? (
          <SpanDueDate>R$ 769,99</SpanDueDate>
        ) : (
          <HideValue width={6} height={6} backgroundColor="gray" />
        )}
      </SpanDueDate>

      <SpanDueDate>
        Limite adicional para Pix e boletos:{" "}
        {visibleValues ? (
          <Span>R$ 550,00</Span>
        ) : (
          <HideValue width={6} height={6} backgroundColor="gray" />
        )}
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
