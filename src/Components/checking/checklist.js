import React, { useEffect, useState } from "react";
import CheckItem from "./check_component";
import auth from "@react-native-firebase/auth";
import { Button, View, Text } from "react-native";
import { Linking } from "react-native";
import { firebase } from "@react-native-firebase/firestore";
import firestore from "@react-native-firebase/firestore";


const Checklist = ({ route }) => {

  const { item } = route.params;
  
  

  let data = []; 


const updateList = async () => {
  try {
    
    const usersCollection = firestore().collection("users");

    
    const snapshot = await usersCollection.get();

    
    snapshot.forEach((doc) => {
      const userEmail = doc.data().email;

      if (userEmail === auth().currentUser.email) {
        const currentList = doc.data().list_of_applied; 

        
        if (currentList.length === 0) {

          try {
            usersCollection.doc(doc.id).update({ list_of_applied: data })
            console.log("List successfully updated.");
          } catch (error) {
            console.error("Error updating list:", error);
          }
        } 

        else {
          currentList.forEach(program => {data.push(program)})
          usersCollection.doc(doc.id).update({ list_of_applied: data });
        }
        
      }
    });
  } catch (error) {
    console.error("General error:", error);
  }
};

  useEffect(() => {
    updateList();
  }, []);

  const reqs = item.requirements;

  const states = reqs.map((requirement) => {
    return { requirement: requirement, reqstate: false };
  });

  function handleChange(id) {
    const updated = states.map((state) => {
      if (state.requirement === id) {
        state.reqstate = !state.reqstate;
      }
    });
    return updated;
  }

  function findState(requirement) {
    states.forEach((state) => {
      if (state.requirement === requirement.text) {
        return state.reqstate;
      }
    });
  }

  const reqCheclist = reqs.map((requirement) => {
    return (
      <CheckItem
        key={requirement}
        check={findState(requirement)}
        handleChange={handleChange}
        text={requirement}
        id={requirement}
      />
    );
  });

  return (
    <View>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL(item.link)}
      >
        Go to this page to begin your application and use this to track your
        tasks
      </Text>
      {reqCheclist}

      <Button
        onPress={(e) => {
          e.preventDefault();
          if (states.some((state) => state.reqstate === false)) {
            alert("Please complete all tasks on the checklist first");
          } else {
            if (data.includes(item.name)) {
              alert(
                "You have already applied for this opportunity. Please wait for their response whilst preparing for the next stage"
              );
            } else {
              data.push(item.name);
              updateList();
              alert(
                "Successfully added. You're taking your chances, good for you"
              );
            }
          }
        }}
        title="Add to applied"
      />
    </View>
  );
};

export default Checklist;


