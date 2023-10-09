import "react-native-gesture-handler";
import "react-native-reanimated";

import { LoadIndicator } from "@components/Loading";
import handleFonts from "@utils/fonts";

import Routes from "@routes/index.routes";
import EncapsulateApp from "@utils/encapsulateApp";

const App = () => {
  const fontsLoaded = handleFonts();

  return (
    <EncapsulateApp>
      {fontsLoaded ? <Routes /> : <LoadIndicator />}
    </EncapsulateApp>
  );
};

export default App;
