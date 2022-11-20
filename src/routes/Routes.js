import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from "../pags/BemVindo";
import Login from "../pags/Login";
import Home from "../pags/Home";
import Calendario from "../pags/Calendario";
import Cadastro from "../pags/Casdastro";
import Quadras from "../Quadras";
const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="BemVindo"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quadras"
        component={Quadras}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
