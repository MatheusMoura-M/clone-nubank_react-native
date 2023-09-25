import "react-native-reanimated";
import { StatusBar, useColorScheme } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Home from "@screens/Home";

import { ThemeProvider } from "styled-components";
import themes from "./src/theme";
import { LoadIndicator } from "@components/Loading";

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <LoadIndicator color="purple" />}
    </ThemeProvider>
  );
};

export default App;
