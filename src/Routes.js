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
import CategoryScreen from './screens/CategoryScreen';
import FoodScreen from './screens/FoodScreen';
import PointScreen from './screens/PointScreen';
import DetailOrder from './screens/DetailOrder';
import {connect} from 'react-redux';
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
    Detail: DetailScreen,
    Cart: CartScreen,
    Checkout: CheckoutScreen,
    Success: SuccessScreen, 

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
    Update: UpdateProfileScreen,
    Logout: LoginScreen, 
    Point: PointScreen,
    DetailOrder: DetailOrder
  },
  {
    defaultNavigationOptions: {
      ...headerOpt
    }
  }
);

const CartegoryStack = createStackNavigator(
  {
    Category: {
     
      screen: CategoryScreen,
     
      navigationOptions: ({ navigation }) => ({
        title: 'Danh mục sản phẩm',
      }),
    },
  },
  {
    defaultNavigationOptions: {
      ...headerOpt
    }
  }
)
class IconWithBadge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      qty: 1
    }
  }

  render() {
    const { name, color, size, badgeCount } = this.props;
   
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = (props) => {
  // console.log("Props CartItems: " + props.cartItems.length);
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3}/>;
};
const TabNavigator = createBottomTabNavigator(
{
    Home: HomeStack,
    Category: CartegoryStack,
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
        else if (routeName === 'Category') {
            iconName = `ios-apps${focused ? '' : ''}`;
            // IconComponent = HomeIconWithBadge;
        }else if (routeName === 'Settings') {
            iconName = `ios-settings${focused ? '' : ''}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#d50000',
        // activeTintColor: `${this.props.theme}`,
        inactiveTintColor: 'gray',
    },
    }
);

const mapStateToProps = (state) => {
  const {cartItems, language, theme} = state;
  return {
    cartItems, language ,theme
  }
}

 export default connect(mapStateToProps)(TabNavigator);
