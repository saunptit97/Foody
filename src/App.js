import React from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Routes from './Routes';

const AppStack = createSwitchNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Routes: Routes
});
export default createAppContainer(AppStack);