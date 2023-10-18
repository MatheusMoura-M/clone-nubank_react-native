import "styled-components/native";
import { useColorScheme } from "react-native";
import themes from "../theme";

export type ThemeType = {
  COLORS: {
    WHITE: string;
    BLACK: string;
    WHITETOGGLE: string;
    BLACKTOGGLE: string;
    PURPLE: string;
    PURPLE_DARK: string;
    PURPLE_LIGHT: string;
    PURPLE_DARK_TEXT: string;
    PURPLE_DARK_TEXT_2: string;
    GRAY_700: string;
    GRAY_600: string;
    GRAY_500: string;
    GRAY_400: string;
    GRAY_300: string;
    GRAY_200: string;
    GRAY_100: string;
    GRAY_DEFAULT: string;
  };
  FONT_FAMILY: {
    ROBOTO: {
      REGULAR: string;
      MEDIUM: string;
      BOLD: string;
    };
    GRAPHIK: {
      LIGHT: string;
      REGULAR: string;
      MEDIUM: string;
      SEMIBOLD: string;
      BOLD: string;
      BLACK: string;
      SUPER: string;
    };
  };
  FONT_SIZE: {
    XS: number;
    SM: number;
    MD: number;
    LG: number;
    XL: number;
    XXL: number;
  };
};

const deviceTheme = useColorScheme();
const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

declare module "styled-components/native" {
  // type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
