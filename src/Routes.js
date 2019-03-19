import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SettingScreen from './screens/SettingScreen';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabNavigator = createBottomTabNavigator(
{
    Home: HomeScreen,
    Cart: CartScreen,
    Settings: SettingScreen,
    },
    {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        
        if ( routeName === 'Login' ) {
            console.log('AA');
        }
        if (routeName === 'Home') {
            iconName = `ios-home${focused ? '' : ''}`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
            // IconComponent = HomeIconWithBadge; 
        } 
        else if (routeName === 'Cart') {
            iconName = `ios-cart${focused ? '' : ''}`;
        }else if (routeName === 'Settings') {
            iconName = `ios-settings${focused ? '' : ''}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#d50000',
        inactiveTintColor: 'gray',
    },
    }
);
export default createAppContainer(TabNavigator);