import React from "react";
import { Text,View,Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabStack from "./TabStack";
import { api_simulation_data } from "../data/data";
import { Feather } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator()


export function Main({route,navigation}:any){

   const name = route.params;
   const nav = useNavigation<NativeStackNavigationProp<any>>();

  const goToLogin = () => {
    auth().signOut()
    nav.push("Login");}

  
 
  return (
    
    <Tab.Navigator  screenOptions={{
      headerRight: () => (

        <View style ={{flexDirection: "row"}}>

          <Button title="Logout" color="#333333"  
          onPress={goToLogin}/>

          <Button title="Applications" color="#333333" 
          onPress={()=> navigation.navigate("Applied")}
          />
        </View>
      ),
      headerTitleStyle: {
        color: "white", // Header text color
        fontWeight: "bold", // Font weight
        fontSize: 25, // Font size (optional)
      },
      headerStyle:{
        backgroundColor:  "#333333",
      
      },
      tabBarStyle: {
        backgroundColor: "#333333", // Android-friendly purple background color
        height: 56, // Android standard TabBar height
         // Optional for rounded corners
        elevation: 8, // Shadow effect for Android
      },
      tabBarLabelStyle: {
        fontSize: 12, // Standard label font size for Android
        fontWeight: 'bold',
        color: '#FFFFFF', // White text color
      },
      tabBarIconStyle: {
        marginBottom: 0, // Reduce margin if needed
      },
      tabBarActiveTintColor: '#FFD700', // Active icon and label color (gold)
      tabBarInactiveTintColor: '#B0BEC5', // Inactive icon and label color (light grey)
    }}>

    <Tab.Screen name="Undergraduate" children={() => <TabStack listData={api_simulation_data.undergraduate} name={name}/>} 
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="bookmark" color={color} size={size} />
      ),
    }}/>

    <Tab.Screen name="Postgraduate" children={() => <TabStack listData={api_simulation_data.postgraduate} name={name}/>} 
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="calendar" color={color} size={size} /> // Feather icon for Apprenticeship
      ),
    }}/>

    <Tab.Screen name="Apprenticeship" children={() => <TabStack listData={api_simulation_data.apprenticeship} name={name} />} 
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="tool" color={color} size={size} /> // Feather icon for Apprenticeship
      ),
    }}/>

    <Tab.Screen name="Attachment" children={() => <TabStack listData={api_simulation_data.industrialAttachment} name={name} />} 
    options={{
      tabBarIcon: ({ color, size }) => (
        <Feather name="briefcase" color={color} size={size} /> // Feather icon for Apprenticeship
      ),
    }}/>
  </Tab.Navigator>
    
      
  );
};


export default Main
//const styles 