import React from "react";
import { Button, Keyboard, Pressable } from "react-native";
import Scholarship from "../Components/undergraduate";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CTAButton } from "../Components/CTAButton/CTAButton";




export const Main = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();

  const goToPage = (type: string) => {
    nav.navigate(type,{title:type});
  };

  return (
    
    <KeyboardAvoidingView>
      <Button title="Undergraduate Scholarship" onPress={()=>goToPage("Undergraduate")} />
      <Button title="Postgraduate Scholarship" onPress={()=>goToPage("Postgraduate")} />
      <Button title="Industrial Attachment" onPress={()=>goToPage("Attachment")} />
      <Button title="Apprenticeship" onPress={()=>goToPage("Apprenticeship")} />
    </KeyboardAvoidingView>
  );
};

//const styles 