import Header from "@components/Header";
import { BoxText, Content, Text } from "./style";
import { useAuth } from "@contexts/index";
import { Container } from "@screens/Home/style";
import { useFocusEffect } from "@react-navigation/native";
import BoxMyOrganization from "@components/BoxMyOrganization";
import ContainerInvestmentMyOrganization from "@components/ContainerInvestmentMyOrganization";
import { useState } from "react";

type handleComponentRenderingProps = {
  myOrganizationActive: boolean;
};

const Investments = () => {
  const { handleButtonMoneyPage } = useAuth();

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
      <ContainerInvestmentMyOrganization />
      <Content>
        <BoxText>
          <Text
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

        <BoxMyOrganization />
      </Content>
    </Container>
  );
};

export default Investments;
