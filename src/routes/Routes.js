import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from "../pags/BemVindo";
import Login from "../pags/Login";
import Home from "../pags/Home";
import Home2 from "../pags/Home2";
import Calendario from "../pags/Calendario";
import Cadastro from "../pags/Casdastro";
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
        name="Home2"
        component={Home2}
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
    </Stack.Navigator>
  );
}
