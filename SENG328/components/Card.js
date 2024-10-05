import React from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Home from  "../pages/Home";
import Icon from 'react-native-vector-icons/MaterialIcons';

function Card({ text, count,onDecreaseCount, onIncreaseCount}) {
    return(
      <SafeAreaView style = {styles.Card}>
        <Text style={styles.CardText}>{text}
          <View style={styles.Calculator}>
            <TouchableOpacity onPress={onIncreaseCount} >
                <Icon name="add" size={24} color="black" />
            </TouchableOpacity>
            <Text>{count} </Text>
            <TouchableOpacity onPress={onDecreaseCount} >
                <Icon name="remove" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  Card: {
    //flex: 1,
    backgroundColor: "#F0F4EF",
    height: 39,
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 50,
    marginRight: 57,
    marginLeft: 57,
    justifyContent: 'center',
  },

  CardText:{
    marginLeft: 50,
    fontSize: 30,
    alignItems: 'center',
    fontFamily: "Poppins",
  },
  Calculator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 25,
    fontFamily: "Poppins",
},

});

export default Card;