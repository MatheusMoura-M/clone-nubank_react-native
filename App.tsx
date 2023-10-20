import "react-native-gesture-handler";
import "react-native-reanimated";

import { LoadIndicator } from "@components/Loading";
import handleFonts from "@utils/fonts";

import Routes from "@routes/index.routes";
import EncapsulateApp from "@utils/encapsulateApp";
import ActionsMenu from "@components/ActionsMenu";

const App = () => {
  const fontsLoaded = handleFonts();

  return (
    <EncapsulateApp>
      {fontsLoaded ? (
        <>
          <Routes />
          <ActionsMenu />
        </>
      ) : (
        <LoadIndicator />
      )}
    </EncapsulateApp>
  );
};

export default App;
