import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Movimentos({ data }) {
  const navigation = useNavigation();
  const [showValue, setShowValue] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Quadras")}
    >
      <Text style={styles.data}>{data.data}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {/* 
        <Text
          style={data.type === "Aberto" ? styles.value : styles.expenses}
          onPress={() => navigation.navigate("Quadras")}
        >
          {data.type === "Aberto" ? ` ${data.value}` : ` ${data.value}`}{" "}
        </Text> */}

        {/* <TouchableOpacity onPress={() => navigation.navigate("Quadras")}>
          <Text>Veja mais informações</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 40,
  },
  date: {
    color: "#dadada",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 16,
    color: "#E74C3C",
    fontWeight: "bold",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#dadada",
    borderRadius: 8,
  },
});
