import React, { useEffect} from "react";
import CheckItem from "./check_component"
import auth from "@react-native-firebase/auth"
import { Button, View ,Text} from "react-native";
import { Linking } from "react-native";
import firestore from "@react-native-firebase/firestore"

const Checklist = ({route}) => {
    const {item} = route.params;

    
   
    const data = []

    const email = auth().currentUser.email

    const updateList = async () => {
       const docs = firestore().collection('users').get()
    docs.forEach((doc) => {
        if (doc.data().email === email)
        {
            doc.data().list_of_applied.forEach(program =>
                data.push(program)
            )
            doc.update({list_of_applied: data})
    
        }
  });
};

 useEffect(()=> {
    updateList()
 }, [])



    const reqs = item.requirements

    const states = reqs.map(requirement => 
        {return (
        {requirement:requirement,reqstate:false}
    )})
   



    
   function handleChange(id){
       const updated = states.map(state =>{
        if (state.requirement === id){
            state.reqstate = !state.reqstate
           }
       }) 
       return updated }

       
       function findState(requirement){
        states.forEach(state => {
            if (state.requirement === requirement.text){
                return state.reqstate}
        });
    }
            
    
    

    const reqCheclist =  reqs.map(requirement => {return (<CheckItem 
        key={requirement}  
        check ={findState(requirement)}
        handleChange ={handleChange}
        text={requirement} 
        id={requirement} />)})


    return (
        <View>
            <Text 
            style={{color:"blue"}}
            onPress={()=>Linking.specific_data.link}
            > 
            Go to this page to begin your application and use this to track your tasks
            </Text>
        {reqCheclist} 
        
        

        
        <Button
        
        onPress={(e) => {
            e.preventDefault()
            if (states.some(state => state.reqstate === false)){ 
                 alert("Please complete all tasks on the checklist first")
                } 
            else{
                 if (data.includes(specific_data.name)){
                    alert("You have already applied for this opportunity. Please wait for their response whilst preparing for the next stage")
                 }
                 else{
                     data.push(specific_data.name)
                     updateList()
                     alert("Successfully added. You're taking your chances, good for you")
                 }
            }
        }} 
        title="Add to applied"
        />
            
        </View>
    )

    }

export default Checklist