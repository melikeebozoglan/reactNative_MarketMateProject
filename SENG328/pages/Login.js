import React, { useState } from "react";
import { View, Text, Button, TextInput, KeyboardAvoidingView, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { ActivityIndicator } from "react-native-web";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { NavigationContainer } from '@react-navigation/native';
//import {createNativeStackNavigator } from '@react-navigation/stack';
import Svg, { Path } from "react-native-svg";


function Login(props) {
    // console.log(props);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    //const [userInfo, setUserInfo] = useState(null);

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            props.navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            alert("Sign in failed" + error.message);
        } finally {
            setLoading(false);
        }
    }

    const GoogleSignIn = async () => {
        try {
          const provider = new GoogleAuthProvider();
    
          const result = await signInWithPopup(auth, provider);
    
          const user = result.user;
    
          console.log("Google Authentication Success:", user);
    
          props.navigation.navigate('Home');
        } catch (error) {

          console.error("Google Authentication Failed:", error);
          alert("Google Authentication Failed: " + error.message);
        }
      };

    return(
        <ImageBackground source={"../img/background.PNG"} style={styles.background}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <Image
                        source={require("../img/MarketMate.png")} 
                        style={styles.image}
                    />
                    <View style={styles.content}>
                        <Text style={styles.title}>Log in</Text>
                    </View>
                    <View style={styles.Content}>
                        <Text style={styles.textInput}>Email</Text>
                        <TextInput style={styles.input} value={email} placeholder="example@gmail.com" autoCapitalize="none" onChangeText={(text) =>setEmail(text)}></TextInput>
                        <Text style={styles.textInput}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry={true} value={password} placeholder="***********" autoCapitalize="none" onChangeText={(text) =>setPassword(text)}></TextInput>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("ForgatPassword")}>
                            <Text style={styles.Textt}>Forgat Password</Text>
                        </TouchableOpacity>
                        
                        <Text style={styles.Text}>Dont’t have account?
                            <TouchableOpacity onPress={ ()=> props.navigation.navigate('CreateNewAccount') }>
                                <Text style={styles.Textt}>
                                    Create a new account
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    
                   
                    { loading ? (<ActivityIndicator size="large" color="#0000ff" />
                    ) : ( <>
                        {/* <Button title="Login" onPress={ ()=>props.navigation.navigate('HomeScreen')}/> */}
                        <View style={styles.content}>
                            <TouchableOpacity onPress={signIn } style={styles.button}>
                                <Text style = {styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={styles.content}>
                            <TouchableOpacity onPress={GoogleSignIn } style={styles.GoogleButton}>
                                <Text style = {styles.buttonText}>Log in with Google</Text>
                            </TouchableOpacity>
                            
                        </View>
                       

                        </>
                    )}
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 130,
    },
    content: {
        alignItems: "center",
        // justifyContent: "center",
    },
    Content: {
        marginTop:  20,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: "Poppins",
    },
    subtitle: {
        fontSize: 25,
        marginBottom: 20,
        fontFamily: "Poppins",
    },
    input: {
        height: 50,
        width: 260,
        borderWidth: 1,
        borderRadius: 42,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#F0F4EF",
        fontFamily: "Poppins",
        color: "#98A2B3",
    },
    textInput: {
        fontSize: 23,
        fontFamily: "Poppins",
        //marginBottom: 15,
    },
    text: {
        fontSize: 12,
        fontFamily: "Poppins",
        marginTop: 40,
    },
    Text: {
        fontSize: 12,
        fontFamily: "Poppins",
        marginBottom: 3,
        marginTop:10,
    },
    Textt: {
        fontSize: 12,
        fontFamily: "Poppins",
        marginBottom: 3,
        marginTop:10,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 265,
        height: 33,
        marginBottom: 50,
    },
    button:{
        backgroundColor: "#475E3E",
        height: 42,  
        width: 130,     
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText:{
      color: "white",
      fontSize: 18,
      fontFamily: "Poppins",
      
    },
    GoogleButton:{
        backgroundColor: "#475E3E",
        height: 42,  
        width: 230,     
        borderRadius: 24,
        borderColor: "#475E3E",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,   
        flexDirection: 'row',     
    },
    GoogleButtonText:{
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins",
        marginLeft: 15,
    },
    GoogleContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        color: "#fff"
    },
});


export default Login;