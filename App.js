// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,TouchableOpacity, TextInput} from 'react-native';
// import firebase from 'firebase';
// // import LoginScreen from './src/screens/LoginScreen';
// // import SignupScreen from './src/screens/SignupScreen';


// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         email: '',
//         password: ''
//     }
//   }
//   handleSignup = () =>{
//     const { email, password } = this.state;
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function(){
//       alert('SUCESS');
//     }).catch(function(error) {
//       alert(error);
//     });
//   }
//   handleSignIn = ()=>{
//     const { email , password} = this.state;
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function(){
//       alert('SUCESS');
//     }).catch(function(error) {
//       alert(error);
//     });
//   }
//   componentWillMount(){
//     var config = {
//       apiKey: "AIzaSyDuiS7bYSd_HIIx8fi2WKdUibJpw5CI42M",
//       authDomain: "food-c4614.firebaseapp.com",
//       databaseURL: "https://food-c4614.firebaseio.com",
//       projectId: "food-c4614",
//       storageBucket: "food-c4614.appspot.com",
//       messagingSenderId: "752684496596"
//     };
//     firebase.initializeApp(config);
//   }
//   render() {
//     return (
//       <View>
//         <Text>Ab</Text>
//         <TextInput
//           placeholder="Email"
//           onChangeText= {(email) => this.setState({email})}
//         />
//         <TextInput
//           placeholder="Password"
//           onChangeText= {(password) => this.setState({password})}
//         />
//         <TouchableOpacity  onPress={this.handleSignup}>
//             <Text >Signup</Text>
//         </TouchableOpacity>
//         <TouchableOpacity  onPress={this.handleSignIn}>
//             <Text >SignIn</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


import React from 'react';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Routes from './src/Routes';
const LoginStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
   Routes: Routes
});
export default createAppContainer(LoginStack);