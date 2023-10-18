import { ReactNode } from "react";
import ButtonDiscovery from "@components/ButtonDiscovery";
import { ContainerTitle, Title, SpanMoney } from "./style";

type ContainerInvestmentProps = {
  children?: ReactNode;
  borderActive?: boolean;
  buttonText: string;
  buttonWidth: number;
};

const ContainerInvestmentMyOrganization = ({
  borderActive = false,
  children,
  buttonText,
  buttonWidth,
}: ContainerInvestmentProps) => {
  return (
    <ContainerTitle borderActive={borderActive}>
      <Title>Total em investimentos</Title>
      <SpanMoney>R$ 0,00</SpanMoney>

      <ButtonDiscovery
        width={buttonWidth}
        height={40}
        marginTop={15}
        text={buttonText}
      />

      {children && children}
    </ContainerTitle>
  );
};

export default ContainerInvestmentMyOrganization;
