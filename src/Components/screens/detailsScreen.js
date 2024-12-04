import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth"


const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>
      <Text style={styles.detail}>Name: {item.name}</Text>
      <Text style={styles.detail}>Details: {item.about}</Text>
      <Button title="Apply" onPress={() => navigation.navigate("Checklist", {item,name})}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default DetailsScreen;