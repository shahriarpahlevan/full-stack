import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 15
  },
  nameText: {
    fontSize: 35,
    padding: 15,
    textAlign: "center"
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 100 }}
        source={{
          uri:
            "https://mariaalterations.com.au/wp-content/uploads/2019/11/Maria_Alterations_Logo-e1573312721956.png"
        }}
      />
      <Text style={styles.nameText}>
        Professional Tailoring services with over 25 years’ experience South of
        the River.
      </Text>
    </View>
  );
}
