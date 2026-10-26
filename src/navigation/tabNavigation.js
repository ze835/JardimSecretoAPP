import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import SearchScreen from "../screens/Searchscreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Produto" component={ProductScreen} />
      <Tab.Screen name="Pesquisa" component={SearchScreen} />
    </Tab.Navigator>
  );
}
