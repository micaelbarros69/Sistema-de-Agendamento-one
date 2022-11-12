import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Agendas from "../components/Header/Agendas/index";
import Movimentos from "../components/Movimentos";
import Actions from "../components/Actions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const list = [
  {
    id: 1,
    label: "IFCE Campus Canindé",
    value: "Aberto",
    type: "Aberto",
  },
  {
    id: 2,
    label: "EEF Senador Carlos Jereissati",
    value: "Fechado",

    type: 1,
  },
  {
    id: 3,
    label: "Ginasio Paulo Sarasate",
    value: "Fechado",

    type: 1,
  },
  {
    id: 4,
    label: "Space Inova",
    value: "Aberto",

    type: "Aberto",
  },
  {
    id: 5,
    label: "Frei Orlando",
    value: "Fechado",

    type: 1,
  },
  {
    id: 6,
    label: "Campo do SAAE",
    value: "Aberto",

    type: "Aberto",
  },
  {
    id: 7,
    label: "Campo do SAAE",
    value: "Aberto",

    type: "Aberto",
  },
  {
    id: 8,
    label: "Campo do SAAE",
    value: "Aberto",

    type: "Aberto",
  },
];

export default function Home2() {
  return (
    <View style={styles.container}>
      <Header nome="Micael Barros" />

      <Actions />

      <Text style={styles.title}>Lista de Espaços </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Movimentos data={item} />}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
        keyExtractor={(item) => String(item.id)}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    flex: 0,
  },
});
