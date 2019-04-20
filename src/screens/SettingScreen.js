import React from 'react';
import { 
  Alert,
  FlatList,
  Button, 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  StyleSheet
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import stringsoflanguages from './../languages/stringsolanguages';
import {connect} from 'react-redux';
class SettingScreen extends React.Component {
  static navigationOptions = {
    headerTitle: `${stringsoflanguages.setting}`,
  };
  // componentWillMount(){
  //   stringsoflanguages.setLanguage("");
  // }
  render() {
    stringsoflanguages.setLanguage(this.props.language);
    return (
      <View style={{ flex: 1, backgroundColor: '#f1eaea'}}>
          <SettingsList>
            <SettingsList.Item
              backgroundColor='#000000'
              titleStyle={{color:'#fff', fontSize: 18}}
              icon={<Image style={styles.imageStyle} source={require('./../images/user.png')}/>}
              title={stringsoflanguages.infor}
              onPress={() => this.props.navigation.navigate('Profile')}
            />
            <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/history.png')}/>}
              title={stringsoflanguages.history}
              onPress={() => this.props.navigation.navigate('History')}
            />
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/invoice.png')}/>}
              title={stringsoflanguages.order}
              onPress={() => this.props.navigation.navigate('Invoice')}
            />
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/policy.png')}/>}
              title={stringsoflanguages.policy}
              onPress={() => this.props.navigation.navigate('Policy')}
            />
             <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/setting.png')}/>}
              title= {stringsoflanguages.setting}
              onPress={() => this.props.navigation.navigate('Config')}
            />
           
          </SettingsList>
          <Text style={styles.version}>{stringsoflanguages.version} 0.0.1</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    marginRight:20,
    alignSelf:'center',
    width:24,
    height:24,
    justifyContent:'center'
  },
  version: {
    textAlign: 'center',
    marginBottom: 20
  }
});
const mapStateToProps = (state) =>{
  const {cartItems, language} = state;
  return {
    cartItems, language
  }
}

export default connect(mapStateToProps)(SettingScreen)