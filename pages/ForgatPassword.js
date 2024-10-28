import React, { useState } from "react";
import { View, Text, Button, TextInput, KeyboardAvoidingView, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth"; 
// import { ActivityIndicator } from "react-native-web";
import { FIREBASE_AUTH } from "../FirebaseConfig";

function ForgotPassword(props) {
    const [email, setEmail] = useState("");
    const auth = FIREBASE_AUTH;

    const sendResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            props.navigation.navigate("Login");
            alert("Success", "Password reset email sent.");
        } catch (error) {
            alert("Error", "Failed to send reset email: " + error.message);
        }
    };

    return (
        <ImageBackground source={"../img/background.PNG"} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.content}>
                        <Text style={styles.title}>Forgot Password</Text>
                    </View>

                    <View style={styles.Content}>
                        <Text style={styles.textInput}>Email</Text>
                        <TextInput
                            placeholder="example@gmail.com"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input} 
                        />
                        <View style={styles.content}>
                                <TouchableOpacity onPress={sendResetEmail } style={styles.button}>
                                    <Text style = {styles.buttonText}>Send Reset Email</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </KeyboardAvoidingView> 
            </SafeAreaView>
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
    // text: {
    //     fontSize: 12,
    //     fontFamily: "Poppins",
    //     marginTop: 40,
    // },
    // Text: {
    //     fontSize: 12,
    //     fontFamily: "Poppins",
    //     marginBottom: 3,
    //     marginTop:10,
    // },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // image:{
    //     width: 265,
    //     height: 33,
    //     marginBottom: 50,
    // },
    button:{
        backgroundColor: "#475E3E",
        height: 42,  
        width: 210,     
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


export default ForgotPassword;
