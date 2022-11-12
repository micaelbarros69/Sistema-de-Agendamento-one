import "react-native-reanimated";
import React, { useState, useEffect } from "react";
import { StatusBar, View, Button, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
