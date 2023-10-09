import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Account from "@screens/Account";

export type RootStackParamList = {
  home: undefined;
  account: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="account" component={Account} />
    </Navigator>
  );
};

export default Routes;
