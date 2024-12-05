import React from "react";
import { FlatList, TouchableOpacity,Text,StyleSheet,View } from "react-native";


const ListScreen = ({route, navigation}) => {
     const {listData} = route.params;
     const {name} = route.params;

     return(
      <FlatList style={{backgroundColor: "white"}}
      data={listData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
       <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", { item , name})}>
            <View style={styles.amountView}>{ item.type === "scholarship" && (<Text style={styles.amount}>{item.amount} </Text>) }</View>
            <View style={{borderTopRadius: item.type === "job" ? 17 : 0,
            }}><Text style={{color: item.type === "job" ? 'blue' : 'black',
              fontSize: item.type === "job" ? 40 : 30,
              marginLeft: 20,
              marginTop: 20
            }}>{item.name}</Text></View>
            <View style={styles.locationView}>
              <Text style={styles.location}>🎯Location: {item.location}</Text>
              { item.type === "job" && (<Text style={styles.duration}>⌛Duration: {item.duration} </Text>) }
            </View>
           
            <View style={styles.dateView}><Text style={styles.date}>Opens: {item.opens}</Text><Text style={styles.date}>Closes: {item.closes}</Text></View>
            {/*So this is the conditional rendering function for difference between scholarships and jobs 
            was not and still am not sure how to do like a full on ternary op to return a diff Flatlist for each item
            but this works for now so yeah*/}
            {/*Actually i figured it out so below i used item to render that only of the condition is true otherwise
            if its not render nothing at all*/}
            <View style={styles.meritView}>{ item.type === "scholarship" && (<Text style={styles.merit}>🏆Merit: {item.merit} </Text>) }</View>
            <View>{ item.type === "scholarship" && (<Text style={styles.merit}>🚻Need: {item.need} </Text>) }</View>
            
         </TouchableOpacity>
       </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  nameView: {
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  name:{
    fontSize: 30,
    fontFamily: "Helvetica",
    
  },
  container: {
    width: 325,
    // Covers 75% of the screen
    marginVertical: 30, // Top and bottom margin
    marginHorizontal: 30, // Left and right margin
    borderWidth: 5, // Thick border
    borderColor: '#000000', // Blue border color
    backgroundColor: 'white',
    borderRadius: 20,
    backgroundColor: "white" // Optional, for better visibility
  },
  reqs:{
    backgroundColor:'white',
  
  },
  list:{
    marginLeft: 20
  },
  amount:{
    marginLeft: 20,
    color: "blue",
    marginTop: 10,
    fontSize: 40
  },
  date:{
    fontSize: 25,
    marginLeft: 20
  },
  dateView:{
    marginTop: 20
  },
  location:{
    fontSize: 25,
    marginLeft: 20
  },
  duration:{
    fontSize: 25,
    marginLeft: 20
  },
  merit:{
    fontSize: 25,
    marginLeft: 20
  },
  locationView:{
    marginTop: 20
  },
  meritView:{
    marginTop: 20
  },
  essayView:{
    marginBottom: 20
  }

});

export default ListScreen;