import { View } from "react-native";
import {
  ContainerMain,
  FirstContainer,
  PurpleBox,
  SecondContainer,
  SpanFirstContainer,
  SpanThirdContainer,
  TextFirstContainer,
  TextThirdContainer,
  ThirdContainer,
} from "./style";
import ButtonDiscovery from "@components/ButtonDiscovery";
import { IconMaterialIconsBalance } from "@components/Balance/style";
import ContainerInvestmentMyOrganization from "@components/ContainerInvestmentMyOrganization";

const BoxMyOrganization = () => {
  return (
    <ContainerMain>
      <FirstContainer>
        <View>
          <PurpleBox>
            <TextFirstContainer>Investi-</TextFirstContainer>
            <SpanFirstContainer>mentos</SpanFirstContainer>
          </PurpleBox>
          <ButtonDiscovery
            fontSize={12}
            paddingTop={2}
            marginTop={7}
            height={24}
            width={73}
            text="Começar"
          />
        </View>
        <View>
          <PurpleBox>
            <TextFirstContainer>Caixi-</TextFirstContainer>
            <SpanFirstContainer>nhas</SpanFirstContainer>
          </PurpleBox>
          <ButtonDiscovery
            fontSize={12}
            paddingTop={2}
            marginTop={7}
            height={24}
            width={73}
            text="Conhecer"
          />
        </View>
      </FirstContainer>

      <SecondContainer>
        <ContainerInvestmentMyOrganization borderActive>
          <IconMaterialIconsBalance
            name="keyboard-arrow-right"
            size={24}
            position={"absolute"}
            right={24}
            top={21}
          />
        </ContainerInvestmentMyOrganization>
      </SecondContainer>

      <ThirdContainer>
        <TextThirdContainer>
          Seus seguros estão em outro lugar
        </TextThirdContainer>
        <SpanThirdContainer>
          Estamos de mudança! Para encontrar a Área de Seguros, acesse o seu
          perfil. Fica bem ali no alto da tela, no canto esquerdo.
        </SpanThirdContainer>

        <IconMaterialIconsBalance
          name="keyboard-arrow-right"
          size={24}
          position={"absolute"}
          right={24}
          top={21}
        />
      </ThirdContainer>
    </ContainerMain>
  );
};

export default BoxMyOrganization;
