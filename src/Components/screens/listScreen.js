import React from "react";
import { FlatList, TouchableOpacity,Text,StyleSheet,View } from "react-native";


const ListScreen = ({route, navigation}) => {
     const {listData} = route.params;
     const {name} = route.params;

     return(
     <FlatList
     data = {listData}
     keyExtractor={(item) => item.id.toString()}

     renderItem = {({item}) => (
        <View style={StyleSheet.container}>
         <TouchableOpacity onPress={() => navigation.navigate("Details",{item,name})}>
            <View style={styles.item1}><Text>{item.name}</Text></View>
            <View style={styles.view1}>
                {item.requirements.map((i,index) => (
                    <View style={styles.listItem}>
                        <Text style={styles.list}> 🩻 {i}</Text>
                    </View>
                ))}
                </View>
                <View>{item.type ==="scholarship" && (<Text>{item.merit}</Text>)}</View>
           </TouchableOpacity>
        </View>)}
     />
    )
}

const styles = StyleSheet.create({
    item1: {
      padding: 20,
      borderBottomWidth: 1,
      borderTopRightRadius: 17,
      borderTopLeftRadius: 17,
      backgroundColor: "#FFA07A",
      
    },
    container: {
      width: 325,
      height: 400, // Covers 75% of the screen
      marginVertical: 30, // Top and bottom margin
      marginHorizontal: 30, // Left and right margin
      borderWidth: 5, // Thick border
      borderColor: 'blue', // Blue border color
      backgroundColor: 'pink',
      borderRadius: 20 // Optional, for better visibility
    },
    view1:{
      backgroundColor:'yellow',
    
    },
    list:{
      marginLeft: 20
    }
  });
  
  export default ListScreen;