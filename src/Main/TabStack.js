import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../Components/screens/listScreen";
import DetailsScreen from "../Components/screens/detailsScreen";
import Checklist from "../Components/checking/checklist";


const Stack = createNativeStackNavigator();

const TabStack = ({listData,name}) => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="List" 
        component={ListScreen} 
        initialParams={{ listData, name } } 
        options={{ title: "Putin or Vlaaad syc" }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: "Item Details" }} 
      />
      <Stack.Screen
        name="Checklist"
        component={Checklist}
        options={{title: "Continue"}}
      />
        </Stack.Navigator>
    )
}
export default TabStack