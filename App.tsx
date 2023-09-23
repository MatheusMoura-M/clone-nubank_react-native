// import "react-native-reanimated";
import { useColorScheme } from "react-native";

import Home from "@screens/Home";

import { ThemeProvider } from "styled-components";
import themes from "./src/theme";

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
