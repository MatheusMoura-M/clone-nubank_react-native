import { ReactNode } from "react";
import ButtonDiscovery from "@components/ButtonDiscovery";
import { ContainerTitle, Title, SpanMoney } from "./style";

type ContainerInvestmentProps = {
  children?: ReactNode;
  borderActive?: boolean;
  buttonText: string;
  buttonWidth: number;
  title: string;
};

const ContainerInvestmentMyOrganization = ({
  borderActive = false,
  children,
  buttonText,
  buttonWidth,
  title,
}: ContainerInvestmentProps) => {
  return (
    <ContainerTitle borderActive={borderActive}>
      <Title>{title}</Title>
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
