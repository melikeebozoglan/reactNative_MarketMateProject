import React, {useState} from "react";
import { View, Text, Button, TextInput, KeyboardAvoidingView, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator } from "react-native-web";
import { FIREBASE_AUTH } from "../FirebaseConfig";

function CreateNewAccount(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        try {
            if (password !== confirmPassword) {
                alert("Passwords do not match");
            }
            const response = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(response);
            props.navigation.navigate("Login") 
            alert("Check Email");
        } catch (error) {
            console.log(error);
            alert("Sign in failed" + error.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <ImageBackground source={"../img/background.PNG"} style={styles.background}>
            <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.content}>
                    <Text style={styles.title}>Sign up</Text>
                    <Text style={styles.subtitle}>Sign up to continue.</Text>
                </View>
                
                <View style={styles.Content}>
                    <Text style={styles.textInput}>Email</Text>
                    <TextInput style={styles.input} value={email} placeholder="example@gmail.com" autoCapitalize="none" onChangeText={(text) =>setEmail(text)}></TextInput>
                    <Text style={styles.textInput}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value={password} placeholder="***********" autoCapitalize="none" onChangeText={(text) =>setPassword(text)}></TextInput>
                    <Text style={styles.textInput}>Confirm Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value={confirmPassword} placeholder="***********" autoCapitalize="none" onChangeText={(text) =>setConfirmPassword(text)}></TextInput>
                </View>
                { loading ? (<ActivityIndicator size="large" color="#0000ff" />
                ) : ( <>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={ signUp } style={styles.button}>
                            <Text style = {styles.buttonText}>Create New Account</Text>
                        </TouchableOpacity>
                    </View>
                    </>
                )}
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

export default CreateNewAccount;