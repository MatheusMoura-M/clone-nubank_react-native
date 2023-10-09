import { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import {
  ArrowLeftIconMenu,
  ArrowRightIconMenu,
  BagIconMenu,
  ChatBubbleIconMenu,
  Container,
  DollarSignIconMenu,
  IconContainer,
} from "./style";

const ActionsMenu = () => {
  const [homePageActivated, setHomePageActivated] = useState<boolean>(false);
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
      intensity={25}
      style={{
        position: "absolute",
        bottom: 10,
        left: 148,
        backgroundColor: "#ffffffc9",
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
          condition={homePageActivated}
          activeOpacity={1}
          onPress={handleButtonHomePage}
        >
          <ArrowLeftIconMenu name="arrow-up-sharp" size={20} />
          <ArrowRightIconMenu name="arrow-up-sharp" size={20} />
        </IconContainer>

        <IconContainer
          condition={moneyPageActivated}
          activeOpacity={1}
          onPress={handleButtonMoneyPage}
        >
          <DollarSignIconMenu name="dollar-sign" size={23} />
        </IconContainer>

        <IconContainer
          condition={shoppingPageActivated}
          activeOpacity={1}
          onPress={handleButtonShoppingPage}
        >
          <BagIconMenu name="shopping-bag" size={20} />
        </IconContainer>
      </Container>
    </BlurView>
  );
};

export default ActionsMenu;
