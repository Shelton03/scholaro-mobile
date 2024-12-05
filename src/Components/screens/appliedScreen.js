import React from "react";
import auth from "@react-native-firebase/auth"
import firestore from  "@react-native-firebase/firestore"
import { Text,View } from "react-native";
import { useState } from "react";

const Applied = ({route,navigation}) => {

    const email = auth().currentUser.email

    const [data,setData] = useState([])

    const createList = async () => { 
        const docs = await firestore().collection("users").get();
        
        docs.forEach((doc) => {
      if (doc.data().email === email)
        {
        setData(doc.data().list_of_applied)
        }
  })
};

createList()

    return(
        <View>
           {data==[]?<Text>You have not applied for anything yet, please go through the website and find opportunities you like</Text>:data.map(program => <Text>{program}</Text>)} 
        </View>
    )
}

export default Applied