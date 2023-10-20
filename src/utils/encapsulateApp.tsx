import { StatusBar, useColorScheme } from "react-native";

import { AuthProvider } from "@contexts/index";
import { NavigationContainer } from "@react-navigation/native";
import { ProviderProps } from "src/@types";

import { ThemeProvider } from "styled-components";
import themes from "../theme";

const EncapsulateApp = ({ children }: ProviderProps) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.COLORS.PURPLE_DARK}
            translucent
          />

          {children}
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default EncapsulateApp;
