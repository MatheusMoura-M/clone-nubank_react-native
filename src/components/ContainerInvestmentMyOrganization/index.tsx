import { ReactNode } from "react";
import ButtonDiscovery from "@components/ButtonDiscovery";
import { ContainerTitle, Title, SpanMoney } from "./style";

type ContainerInvestmentProps = {
  children?: ReactNode;
  borderActive?: boolean;
};

const ContainerInvestmentMyOrganization = ({
  borderActive = false,
  children,
}: ContainerInvestmentProps) => {
  return (
    <ContainerTitle borderActive={borderActive}>
      <Title>Total em investimentos</Title>
      <SpanMoney>R$ 0,00</SpanMoney>

      <ButtonDiscovery width={88} height={40} marginTop={15} text="Investir" />

      {children && children}
    </ContainerTitle>
  );
};

export default ContainerInvestmentMyOrganization;
