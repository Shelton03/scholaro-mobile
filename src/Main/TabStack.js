import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../Components/screens/listScreen";
import DetailsScreen from "../Components/screens/detailsScreen";
import Checklist from "../Components/checking/checklist";
import Applied from "../Components/screens/appliedScreen";


const Stack = createNativeStackNavigator();

const TabStack = ({listData,name}) => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="List" 
        component={ListScreen} 
        initialParams={{ listData, name } } 
        options={{ title: "Education is the key 👨‍🎓" }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: "Back" }} 
      />
      <Stack.Screen
        name="Checklist"
        component={Checklist}
        options={{title: "Back"}}
      />
      <Stack.Screen
        name="Applied"
        component={Applied}
        options={{title: "Back"}}
      />
        </Stack.Navigator>
    )
}
export default TabStack