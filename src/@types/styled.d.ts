import "styled-components/native";
import { useColorScheme } from "react-native";
import themes from "../theme";

const deviceTheme = useColorScheme();
const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

declare module "styled-components/native" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
