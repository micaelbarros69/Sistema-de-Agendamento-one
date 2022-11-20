import { title } from "process";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Inform({ list }) {
  return (
    <View style={style.containe}>
      <Text style={style.title}>aloo</Text>
    </View>
  );
}
const style = StyleSheet.create({
  containe: {},
  title: {
    fontSize: 20,
  },
});
