import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Movimentos({ data }) {
  const [showValue, setShowValue] = useState(false);
  return (
    <TouchableOpacity
      style={styles.conteiner}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.data}>{data.data}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        <Text style={data.type === "Aberto" ? styles.value : styles.expenses}>
          {data.type === "Aberto" ? ` ${data.value}` : ` ${data.value}`}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginBottom: 24,
    borderBottomWidth: 0.5,
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
