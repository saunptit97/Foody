import React from 'react';
import { 
  Alert,
  FlatList,
  Button, 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
export default class SettingScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Cài đặt ứng dụng',
  };
  state = {
    modalVisible: false,
    language: 'en'
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1eaea'}}>
          <SettingsList>
        
            <SettingsList.Header headerStyle={{marginTop:5}} title="Cài đặt ứng dụng"/>
            <SettingsList.Item
              icon={ <Icon name="md-locate" color="#333"  size={30} style={{marginLeft: 10, marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />
             }
              title='Chọn Tỉnh/Thành phố'
              onPress={() => this.props.navigation.navigate('Address')}
            />
            <SettingsList.Item
              icon={<Icon name="md-flag" color="#333"  size={30} style={{marginLeft: 10, marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />}
              title='Đổi ngôn ngữ'
              onPress={() => {
                this.setModalVisible(true);
              }}
            />
            <SettingsList.Item
                icon={<Icon name="ios-mail" color="#333"  size={30} style={{marginLeft: 10 , marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />}
                title='Liên hệ'
                onPress={() => this.props.navigation.navigate('Contact')}
              />
           
          </SettingsList>
         
          <Modal
          transparent
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}>
            <View style={{
            flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
            <View style={{
                    flex: 1, 
                    marginTop: 50,
                    marginBottom: 100, 
                    marginRight: 10,
                    marginLeft: 10 ,
                    backgroundColor: 'white',
                    // padding: 20
                    }}>
                    <View style={{

                      paddingBottom: 10, 
                    
                    }}>
                      <Button raised icon={{name : 'close'}}
                        
                        title="Đóng"
                        backgroundColor = "red"
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
               />
                    </View>
                        <View style={{padding: 20}}>
                        <Text>Chọn ngôn ngữ</Text>
              <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="Tiếng Việt" value="vi" />
                  <Picker.Item label="English" value="en" />
                </Picker>
                        </View>
                    
              
            </View>
          </View>
        </Modal>
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
