import "react-native-gesture-handler";
import "react-native-reanimated";
import { StatusBar, useColorScheme } from "react-native";

import { ThemeProvider } from "styled-components";
import themes from "./src/theme";

import { LoadIndicator } from "@components/Loading";
import handleFonts from "@utils/fonts";

import { AuthProvider } from "@contexts/index";
import Routes from "@routes/index";

const App = () => {
  const fontsLoaded = handleFonts();
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.COLORS.PURPLE_DARK}
          translucent
        />

        {fontsLoaded ? <Routes /> : <LoadIndicator />}
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
