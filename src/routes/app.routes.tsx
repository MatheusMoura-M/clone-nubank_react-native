import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Teste from "@screens/Teste";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="teste" component={Teste} />
    </Navigator>
  );
};

export default AppRoutes;
