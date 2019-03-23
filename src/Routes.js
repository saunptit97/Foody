import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SettingScreen from './screens/SettingScreen';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from "./screens/LoginScreen";
import DetailScreen from "./screens/DetailScreen";
import SignupScreen from "./screens/SignupScreen";
import CheckoutScreen from './screens/CheckoutScreen';
import SuccessScreen from "./screens/SuccessScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PolicyScreen from './screens/PolicyScreen';
import HistoryScreen from './screens/HistoryScreen';
import ConfigSCreen from './screens/ConfigScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
const headerOpt = {
  headerStyle: {
    backgroundColor: '#d50000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    // alignSelf: 'center',
    textAlign: 'center',
    // flex: 1
  },
}
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        ...headerOpt
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Setting: SettingScreen,
    Profile: ProfileScreen,
    Policy: PolicyScreen,
    History: HistoryScreen,
    Config: ConfigSCreen,
    Invoice: InvoiceScreen,
    Update: UpdateProfileScreen
  },
  {
    defaultNavigationOptions: {
      ...headerOpt
    }
  }
);

const CartStack = createStackNavigator(
  {
    Cart: CartScreen,
    Checkout: CheckoutScreen,
    Success: SuccessScreen
  },
  {
    defaultNavigationOptions: {
      ...headerOpt
    }
  }
)

const TabNavigator = createBottomTabNavigator(
{
    Home: HomeStack,
    Cart: CartStack,
    Settings: SettingsStack,
    },
    {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
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
