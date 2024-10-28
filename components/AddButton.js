import React from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Home from "../pages/Home";

function AddButton({onPress}) {
    return(
        <SafeAreaView style = {styles.AddButton}>
            <TouchableOpacity onPress={onPress} >
              <Text style = {styles.AddButtonText}>Add
                <Icon name="add" size={20} color="white" />
              </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AddButton:{
        backgroundColor: "#475E3E",
        height: 42,
        marginTop: 400,
        marginLeft: 240,
        marginRight: 60,        
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    AddButtonText:{
      color: "white",
      fontSize: 25,
      
      
    },
   
});


export default AddButton;