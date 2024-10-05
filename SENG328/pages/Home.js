import React, {useState} from "react";
import { SafeAreaView, TextInput, StyleSheet, Button, Text, TouchableOpacity, View } from "react-native";
import Card from "../components/Card";
//import { NavigationProp } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { getAuth, signOut } from "firebase/auth";

function Home(props) {
  const [inputText, setInputText] = useState('');
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(1);

  const handleAddCard = () => {
    if (inputText.trim() !== '') {
      setCards(prevCards => [...prevCards, inputText]);
      setInputText('');
    }
  };
  const handleDeleteCard = (count) => {
    setCards(prevCards => prevCards.filter((_, i) => i !== count));

};

  onIncreaseCount=() => {
   setCount(count+1)
  };

  onDecreaseCount=(index) => {
    setCount(count-1)
    if (count === 1) {
      handleDeleteCard(index);
    }
  };
  const handleSignOut = async () => {
    try {
        const auth = getAuth();
        const response = await signOut(auth); 
       
        props.navigation.navigate('Login');
    } catch (error) {
        console.error("Sign out failed", error);
    }
};

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.HomeText}>List</Text>
      {cards.map((text, index) => (
        <Card key={index} text={text} count={count} onIncreaseCount={()=>onIncreaseCount(index)} onDecreaseCount={()=>onDecreaseCount(index)}/>
      ))}

      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter.."
      />

      <TouchableOpacity onPress={handleAddCard} style = {styles.AddButton} >
        <Text style = {styles.AddButtonText}>Add
          <Icon name="add" size={20} color="white" />
        </Text>
      </TouchableOpacity>

      <View style={styles.content}>
          <TouchableOpacity onPress={handleSignOut } style={styles.button}>
            <Text style = {styles.buttonText}>Log out</Text>
          </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  HomeText:{
    fontFamily: "Poppins",
    fontSize: 30,
    marginTop: 50,
    marginLeft: 56,
  },
  input: {
    borderWidth: 1,
    padding: 10,

    backgroundColor: "#F0F4EF",
    fontFamily: "Poppins",
    color: "#98A2B3",

    height: 39,
    borderColor: "black",
    borderRadius: 12,
    marginTop: 50,
    marginRight: 57,
    marginLeft: 57,
    justifyContent: 'center',
  },
  AddButton:{
    backgroundColor: "#475E3E",
    height: 42,
    marginTop: 50,
    marginLeft: 240,
    marginRight: 60,        
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddButtonText:{
    color: "white",
    fontSize: 25,
    fontFamily: "Poppins",
  },
  content: {
    alignItems: "center",
},
button:{
  backgroundColor: "#475E3E",
  height: 42,  
  width: 130,     
  borderRadius: 24,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 80,
},
buttonText:{
color: "white",
fontSize: 18,
fontFamily: "Poppins",

},

});

export default Home;