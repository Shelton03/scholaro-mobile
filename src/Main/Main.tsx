import React from "react";
import { Text,View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabStack from "./TabStack";
import { api_simulation_data } from "../data/data";

const Tab = createBottomTabNavigator()


export function Main({route}:any){
   const name = route.params;
 
  return (
    
      <Tab.Navigator>
        
      <Tab.Screen name="Undergraduate Scholarship" children={()=> <TabStack  listData ={api_simulation_data.undergraduate} name={name}/>} />
      <Tab.Screen name="Postgraduate Scholarship" children={()=> <TabStack  listData ={api_simulation_data.postgraduate} name={name}/>} />
      <Tab.Screen name="Industrial Attachment" children={()=>  <TabStack listData ={api_simulation_data.industrialAttachment} name={name}/>} />
      <Tab.Screen name="Apprenticeship" children={()=> <TabStack listData ={api_simulation_data.apprenticeship} name={name}/>} />
      </Tab.Navigator>
    
      
  );
};


export default Main
//const styles 