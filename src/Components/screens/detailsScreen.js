import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth"


const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.detail}>Name: {item.name}</Text>
      <Text style={{fontSize:20}}>About:</Text>
      <Text>{item.about}</Text>
      <Text style={{fontSize: 20, marginTop:10}}>Requirements</Text>
      <View style={styles.reqs}>
              {item.requirements.map((i, index) => (
                <View style={styles.listItem}>
                  <Text style={styles.reqs}>🎓 {i}</Text>
                  </View>
              ))}
      </View>
      <Text style={{marginTop:10, fontSize:20}}>Eligibilty</Text>
      <View>
        {item.eligibility.map((i, index) => (
          <View>
            <Text>🔑 {i}</Text>
            </View>
        ))}
      </View>

      <Text style={{marginTop:10, fontSize:20}}>Benefits:</Text>
      <View>
        {item.benefits.map((i, index) => (
          <View>
            <Text>🎗 {i}</Text>
            </View>
        ))}
      </View>

      <View style={styles.meritView}>{ item.type === "scholarship" && (<Text style={styles.merit}>🏆Merit: {item.merit} </Text>) }</View>
            <View>{ item.type === "scholarship" && (<Text style={styles.merit}>🚻Need: {item.need} </Text>) }</View>
            <View style={styles.essayView}>{ item.type === "scholarship" && (<Text style={styles.merit}>📕Essay Required: {item.essay} </Text>) }</View>


      <Button title="Apply" onPress={() => navigation.navigate("Checklist", {item})}/>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detail: {
    fontSize: 20,
    marginVertical: 8,
  },
  meritView:{
    marginTop:10,
  },
  essayView:{
    marginBottom:10
  }
});

export default DetailsScreen;