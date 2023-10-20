import themes from "../theme";
import { useAuth } from "@contexts/index";

const { deviceTheme } = useAuth();
const themeConditional = deviceTheme ? themes[deviceTheme] : themes.dark;

export { themeConditional };
