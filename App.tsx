import "react-native-reanimated";
import { StatusBar, useColorScheme } from "react-native";

import { ThemeProvider } from "styled-components";
import themes from "./src/theme";

import { LoadIndicator } from "@components/Loading";
import handleFonts from "@utils/fonts";

import Home from "@screens/Home";

const App = () => {
  const fontsLoaded = handleFonts();
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
