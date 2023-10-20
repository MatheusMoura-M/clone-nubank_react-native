import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Account from "@screens/Account";
import Investments from "@screens/Investments";
import Shopping from "@screens/Shopping";

export type RootStackParamList = {
  home: undefined;
  account: undefined;
  investments: undefined;
  shopping: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="account" component={Account} />
      <Screen name="investments" component={Investments} />
      <Screen name="shopping" component={Shopping} />
    </Navigator>
  );
};

export default Routes;
