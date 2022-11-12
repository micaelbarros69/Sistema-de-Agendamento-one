import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import Agendas from "../components/Header/Agendas/index";
import Movimentos from "../components/Movimentos";
import Actions from "../components/Actions";
const list = [
  {
    id: 1,
    label: "boleto conta luz",
    value: "300,00",
    data: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "pix cliente x",
    value: "2.500,00",
    data: "20/09/2022",
    type: 1,
  },
  {
    id: 3,
    label: "salario",
    value: "7.500,00",
    data: "27/09/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header nome="Micael Barros" />

      <Agendas saldo="9.250,00" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}> ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movimentos data={item} />}
      />
    </View> //barra de rolagem
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
