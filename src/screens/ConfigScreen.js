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
  Picker,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import stringsoflanguages from './../languages/stringsolanguages';
import {connect} from 'react-redux';
class ConfigScreen extends React.Component {
  static navigationOptions = {
    headerTitle: `${stringsoflanguages.config}`,
  };
  state = {
    modalVisible: false,
    modalCurrency: false,
    language: '',
    currency: ''
  };
  componentWillMount(){
    this.setState({
      language: `${this.props.language}`,
      currency: `${this.props.currency}`
    })
  
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setModalCurrency(visible) {
    this.setState({modalCurrency: visible});
  }
  handleChangeLanguage(){
    var language = this.state.language;
    this.props.changelanguage(language);
    ToastAndroid.show('Change language successfully', ToastAndroid.SHORT)
  }
  handleChangeCurrency(){
    var currency = this.state.currency;
    this.props.changecurrency(currency);
    ToastAndroid.show('Change currency successfully', ToastAndroid.SHORT)
    this.setModalCurrency(!this.state.modalCurrency);
    this.props.navigation.push("Home", {
      currence: this.props.currence
    })
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1eaea'}}>
          <SettingsList>
        
            <SettingsList.Header headerStyle={{marginTop:5}} title="Cài đặt ứng dụng"/>
            {/* <SettingsList.Item
              icon={ <Icon name="md-locate" color="#333"  size={30} style={{marginLeft: 10, marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />
             }
              title={stringsoflanguages.change_address}
              onPress={() => this.props.navigation.navigate('Address')}
            /> */}
            <SettingsList.Item
              icon={<Icon name="md-flag" color="#333"  size={30} style={{marginLeft: 10, marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />}
              title= {stringsoflanguages.language}
              onPress={() => {
                this.setModalVisible(true);
              }}
            />
             <SettingsList.Item
              icon={<Icon name="logo-bitcoin" color="#333"  size={30} style={{marginLeft: 10, marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />}
              title= "Tiền tệ"
              onPress={() => {
                this.setModalCurrency(true);
              }}
            />
            <SettingsList.Item
                icon={<Icon name="ios-mail" color="#333"  size={30} style={{marginLeft: 10 , marginTop: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} />}
                title={stringsoflanguages.contact}
                onPress={() => this.props.navigation.navigate('Contact')}
              />
    
          </SettingsList>
         {/* Modal Language */}
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
                        
                        title={stringsoflanguages.close}
                        backgroundColor = "red"
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
               />
                    </View>
                        <View style={{padding: 20}}>
                        <Text>{stringsoflanguages.settinglanguage}</Text>
              <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label={stringsoflanguages.vietnamese} value="vi" />
                  <Picker.Item label={stringsoflanguages.english} value="en" />
                </Picker>
                        
                <Button raised icon={{name : 'close'}}
                        
                        title={stringsoflanguages.change}
                        backgroundColor = "red"
                        onPress={() => {
                          this.handleChangeLanguage()
                        }}
               />
                        </View>
                    
              
            </View>
            </View>
          </Modal>
          
          {/* Modal Curency  */}
          <Modal
            transparent
            animationType="slide"
            transparent={false}
            visible={this.state.modalCurrency}
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
                        
                        title={stringsoflanguages.close}
                        backgroundColor = "red"
                        onPress={() => {
                          this.setModalCurrency(!this.state.modalCurrency);
                        }}
               />
                    </View>
                        <View style={{padding: 20}}>
                        <Text>Đơn vị tiền tệ</Text>
              <Picker
                  selectedValue={this.state.currency}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({currency: itemValue})
                  }>
                  <Picker.Item label="VNĐ (đ)" value="vnd" />
                  <Picker.Item label="Đô la ($)" value="usd" />
                </Picker>
                        
                <Button raised icon={{name : 'close'}}
                        
                        title="Thay đổi đơn vị tiền tệ"
                        backgroundColor = "red"
                        onPress={() => {
                          this.handleChangeCurrency()
                        }}
               />
              </View>
                    
              
            </View>
            </View>
          </Modal>



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
  const {cartItems, language , currency} = state;
  return {
    cartItems, language , currency
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    changelanguage:(text) => dispatch({type:'CHANGE_LANGUAGE',
    text:text}),
    changecurrency:(text) => dispatch({type:'CHANGE_CURRENCY',
    text: text
  })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen)