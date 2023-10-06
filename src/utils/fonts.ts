import { useEffect } from "react";
import * as Font from "expo-font";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useColorScheme } from "react-native";

const handleFonts = () => {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        GraphikBold: require("../assets/fonts/GraphikBold.otf"),
        GraphikBlack: require("../assets/fonts/GraphikBlack.otf"),
        GraphikLight: require("../assets/fonts/GraphikLight.otf"),
        GraphikMedium: require("../assets/fonts/GraphikMedium.otf"),
        GraphikRegular: require("../assets/fonts/GraphikRegular.otf"),
        GraphikSuper: require("../assets/fonts/GraphikSuper.otf"),
        GraphikSemibold: require("../assets/fonts/GraphikSemibold.otf"),
      });
    };

    loadFonts();
  }, []);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return fontsLoaded;
};

export default handleFonts;
