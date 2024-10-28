// import React, { useState } from "react";
// import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';

// function Calculator() {
//     const [count, setCount] = useState(1);
    
//     const increaseCount = () => {
//         setCount(count + 1);
//     };

//     const decreaseCount = () => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//     };

//     return(
//         <SafeAreaView>
//             <View style={styles.container}>
//                 <TouchableOpacity onPress={increaseCount}>
//                     <Icon name="add" size={24} color="black" />
//                 </TouchableOpacity>

//                 <Text>{count}</Text>
                
//                 <TouchableOpacity onPress={decreaseCount}>
//                     <Icon name="remove" size={24} color="black" />
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: 10,
//         fontSize: 25,
//         fontFamily: "Poppins",
//     },
// });

// export default Calculator;
