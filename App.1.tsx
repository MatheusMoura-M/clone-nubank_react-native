import { Image, StatusBar, View, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./src/theme";
import { LoadIndicator } from "@components/Loading";
import handleFonts from "@utils/fonts";
import { AuthProvider } from "@contexts/index";

export const App = () => {
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

        {/* {fontsLoaded ? <Home /> : <LoadIndicator color="purple" />} */}
        {fontsLoaded ? (
          <View
            style={{
              width: 200,
              height: 1000,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("./src/assets/Nubank_logo_2021.png")}
              style={{ width: 60, height: 60 }}
              resizeMode="center"
            />
            <Image
              source={require("./src/assets/nu-logo.png")}
              style={{ width: 60, height: 60 }}
              resizeMode="center"
            />
          </View>
        ) : (
          <LoadIndicator color="purple" />
        )}
      </ThemeProvider>
    </AuthProvider>
  );
};
