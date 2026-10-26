
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import SplashScreen from "../screens/SplashScreen";
import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>

      {/* Tela Splash desativada temporariamente */}
      {/*
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      */}

      {/* Tela de Cadastro desativada temporariamente */}
      {/*
      <Stack.Screen
        name="Cadastro"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      */}

      {/* Tela de Login desativada temporariamente */}
      {/*
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      */}

      {/* Abre diretamente a navegação das tabs */}
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
