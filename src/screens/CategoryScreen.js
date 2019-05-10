import React from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator, createAppContainer ,createBottomTabNavigator , createMaterialTopTabNavigator} from "react-navigation";
import InvoiceScreen from './InvoiceScreen';
import FoodScreen from './FoodScreen';
import DrinkScreen from './DrinkScreen';
import NewScreen from './NewScreen';




const Tabs = createMaterialTopTabNavigator({
  Food: FoodScreen,
  Drink: DrinkScreen,
  New: NewScreen
},{
  tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: '#fff',
      },
      indicatorStyle: {
          backgroundColor: '#000',
      },
  }
});

 export default createAppContainer(Tabs);
