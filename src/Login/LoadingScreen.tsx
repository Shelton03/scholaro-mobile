import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth"
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export const LoadingScreen = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();

  function authStateChanges(user: FirebaseAuthTypes.User | null){
    setTimeout(() => {
      if (user){
        nav.replace("Main",user.email)
      }
      else{
        nav.replace("Login")
      }
      
    }, 1000);
  } 

  useEffect(() => {
    const sub = auth().onAuthStateChanged(authStateChanges)
    return sub
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loadingText: {
    fontSize: 70,
    fontWeight: "200",
    textAlign: "center",
  },
});
