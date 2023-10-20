import Header from "@components/Header";
import { BoxText, Content, Text } from "./style";
import { useAuth } from "@contexts/index";
import { Container } from "@screens/Home/style";
import { useFocusEffect } from "@react-navigation/native";
import BoxMyOrganization from "@components/BoxMyOrganization";
import ContainerInvestmentMyOrganization from "@components/ContainerInvestmentMyOrganization";
import { useState } from "react";
import BoxDistributionAnalysis from "@components/BoxDistributionAnalysis";

type handleComponentRenderingProps = {
  myOrganizationActive: boolean;
};

const Investments = () => {
  const { handleButtonMoneyPage, deviceTheme } = useAuth();

  const [distributionAnalysisVisible, setDistributionAnalysisVisible] =
    useState<boolean>(false);
  const [myOrganizationVisible, setMyOrganizationVisible] =
    useState<boolean>(true);

  const handleComponentRendering = (
    myOrganizationActive?: handleComponentRenderingProps
  ) => {
    if (myOrganizationActive) {
      setMyOrganizationVisible(true);
      setDistributionAnalysisVisible(false);
    } else {
      setDistributionAnalysisVisible(true);
      setMyOrganizationVisible(false);
    }
  };

  useFocusEffect(() => {
    handleButtonMoneyPage();
  });

  return (
    <Container>
      <Header name={"Matheus Moura"} />
      <ContainerInvestmentMyOrganization
        title="Total em investimentos"
        buttonText="Investir"
        buttonWidth={88}
      />
      <Content>
        <BoxText>
          <Text
            deviceTheme={deviceTheme!}
            onPress={() =>
              handleComponentRendering({ myOrganizationActive: true })
            }
            activeText={myOrganizationVisible}
          >
            Minha organização
          </Text>
          <Text
            borderActive
            onPress={() => handleComponentRendering()}
            activeText={distributionAnalysisVisible}
          >
            Análise da distribuição
          </Text>
        </BoxText>

        {myOrganizationVisible ? (
          <BoxMyOrganization />
        ) : (
          <BoxDistributionAnalysis />
        )}
      </Content>
    </Container>
  );
};

export default Investments;
