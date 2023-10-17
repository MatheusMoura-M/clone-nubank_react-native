import { View } from "react-native";
import { ContainerMain, FirstContainer, PurpleBox, Span, Text } from "./style";
import ButtonDiscovery from "@components/ButtonDiscovery";

const BoxMyOrganization = () => {
  return (
    <ContainerMain>
      <FirstContainer>
        <View>
          <PurpleBox>
            <Text>Investi-</Text>
            <Span>mentos</Span>
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
            <Text>Caixi-</Text>
            <Span>nhas</Span>
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
    </ContainerMain>
  );
};

export default BoxMyOrganization;
