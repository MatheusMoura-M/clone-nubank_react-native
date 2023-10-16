import { useState } from "react";
import { BlurView } from "expo-blur";
import {
  ArrowLeftIconMenu,
  Bag,
  BagContainer,
  BagStrap,
  Container,
  EmptyPart,
  IconContainer,
} from "./style";
import { useColorScheme } from "react-native";
import { DollarSignIconMenu } from "@components/BoxLoans/style";
import { ArrowRightIconMenu } from "@components/ButtonCreditCard/style";

const ActionsMenu = () => {
  const deviceTheme = useColorScheme();

  const [homePageActivated, setHomePageActivated] = useState<boolean>(true);
  const [moneyPageActivated, setMoneyPageActivated] = useState<boolean>(false);
  const [shoppingPageActivated, setShoppingPageActivated] =
    useState<boolean>(false);

  const handleButtonHomePage = () => {
    setMoneyPageActivated(false);
    setShoppingPageActivated(false);
    setHomePageActivated(true);
  };

  const handleButtonMoneyPage = () => {
    setHomePageActivated(false);
    setShoppingPageActivated(false);
    setMoneyPageActivated(true);
  };

  const handleButtonShoppingPage = () => {
    setHomePageActivated(false);
    setMoneyPageActivated(false);
    setShoppingPageActivated(true);
  };

  return (
    <BlurView
      intensity={deviceTheme == "dark" ? 5 : 25}
      style={{
        position: "absolute",
        bottom: 10,
        left: 148,
        backgroundColor: deviceTheme == "dark" ? "#000000e4" : "#ffffffc9",
        // backgroundColor:"#b989daf8",
        height: 65,
        width: 205,
        borderRadius: 40,
        elevation: 1.5,
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Container>
        <IconContainer
          deviceTheme={deviceTheme}
          condition={homePageActivated}
          activeOpacity={1}
          onPress={handleButtonHomePage}
        >
          <ArrowLeftIconMenu
            name="arrow-up-sharp"
            size={20}
            deviceTheme={deviceTheme}
            condition={homePageActivated}
          />
          <ArrowRightIconMenu
            name="arrow-up-sharp"
            size={20}
            deviceTheme={deviceTheme}
            condition={homePageActivated}
          />
        </IconContainer>

        <IconContainer
          deviceTheme={deviceTheme}
          condition={moneyPageActivated}
          activeOpacity={1}
          onPress={handleButtonMoneyPage}
        >
          <DollarSignIconMenu
            name="dollar-sign"
            size={23}
            condition={moneyPageActivated}
            deviceTheme={deviceTheme}
          />
        </IconContainer>

        <IconContainer
          deviceTheme={deviceTheme}
          condition={shoppingPageActivated}
          activeOpacity={1}
          onPress={handleButtonShoppingPage}
        >
          <BagContainer>
            <BagStrap
              condition={shoppingPageActivated}
              deviceTheme={deviceTheme}
            />
            <Bag condition={shoppingPageActivated} deviceTheme={deviceTheme}>
              <EmptyPart
                condition={shoppingPageActivated}
                deviceTheme={deviceTheme}
              />
            </Bag>
          </BagContainer>
        </IconContainer>
      </Container>
    </BlurView>
  );
};

export default ActionsMenu;
