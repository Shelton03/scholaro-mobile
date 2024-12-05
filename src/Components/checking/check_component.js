import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { View,Text} from "react-native";


const CheckItem = (props) => {
  
    

    return (
        
    <View style={{flexDirection:"row",
        alignItems:"center"
    }}>
        <CheckBox style={{color:"blue"}}  checked={props.check} onChange={() => props.handleChange(props.id)} />
        <Text>{props.text} </Text>
    </View>)

    
}
export default CheckItem


