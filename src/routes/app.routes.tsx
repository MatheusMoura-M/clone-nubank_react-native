import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Teste from "@screens/Teste";

export type RootStackParamList = {
  home: undefined;
  teste: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="teste" component={Teste} />
    </Navigator>
  );
};

export default AppRoutes;
