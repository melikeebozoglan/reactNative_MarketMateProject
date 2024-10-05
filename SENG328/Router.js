//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { FIREBASE_AUTH } from './FirebaseConfig';
import CreateNewAccount from "./pages/CreateNewAccount";
import ForgatPassword from "./pages/ForgatPassword";

const Stack = createNativeStackNavigator();

// const InsideStack = createNativeStackNavigator();

// function InsideLayout() {
//   return(
//     <InsideStack.Navigator>
//       <InsideStack.Screen name= "Home" component={Home} />
//     </InsideStack.Navigator>
    
//   );
// }

function App() {
  // const [user, setUser] = useState<firebase.User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     //console.log("user", user);
  //     setUser(user);
  //   });
  //   return () => unsubscribe();
  // }, []);
  
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
        <Stack.Screen name="ForgatPassword" component={ForgatPassword} />
        {/* {user ? (
            <Stack.Screen name="InsideLayout" component={InsideLayout} options={{headerShown: false}}/>
          ) : (
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          )
        }
         */}
        {/* <Stack.Screen name="HomeScreen" component={Home}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;