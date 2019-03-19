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
export default class SettingScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Setting',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1eaea'}}>
          <SettingsList>
            <SettingsList.Item
              backgroundColor='#000000'
              titleStyle={{color:'#fff', fontSize: 18}}
              icon={<Image style={styles.imageStyle} source={require('./../images/user.png')}/>}
              title='Thông tin'
              onPress={() => this.props.navigation.navigate('Profile')}
            />
            <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/history.png')}/>}
              title='Lịch sử'
              onPress={() => this.props.navigation.navigate('History')}
            />
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/invoice.png')}/>}
              title='Hóa đơn'
              onPress={() => this.props.navigation.navigate('Invoice')}
            />
            <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/policy.png')}/>}
              title='Chính sách'
              onPress={() => this.props.navigation.navigate('Policy')}
            />
             <SettingsList.Item
              icon={<Image style={styles.imageStyle} source={require('./../images/setting.png')}/>}
              title='Cài đặt ứng dụng'
              onPress={() => this.props.navigation.navigate('Config')}
            />
           
          </SettingsList>
          <Text style={styles.version}>Version 0.0.1</Text>
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
