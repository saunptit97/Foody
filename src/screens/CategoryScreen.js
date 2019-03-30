import React from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator, createAppContainer ,createBottomTabNavigator , createMaterialTopTabNavigator} from "react-navigation";
import InvoiceScreen from './InvoiceScreen';
import FoodScreen from './FoodScreen';
import DrinkScreen from './DrinkScreen';
import FastFoodScreen from './FastFoodScreen';




const TabNavigator = createMaterialTopTabNavigator(
{
    Food: {
        screen: FoodScreen,
        tabBarOptions: {
            labelStyle: {
              fontSize: 12,
              color: '#000'
            },
            showLabel : false
          }
    },
    Drink: DrinkScreen,
    FastFood: FastFoodScreen
},
{
    
});
TabNavigator.navigationOptions = ({ navigation }) => {
    let activeRoute = navigation.state.routes[navigation.state.index];
    if (activeRoute.routeName === 'Food') { // or whatever the name is
      return {
        headerRight: <SomeThingHere />
      };
    } else {
      return {};
    }
  };
 export default createAppContainer(TabNavigator);
