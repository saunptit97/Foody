import React from 'react';
import { Button, View, Text , TouchableOpacity, StyleSheet, Image,ImageBackground, ScrollView, TextInput} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import img from './../images/logo.jpg';
import bg from './../images/bg.jpg';

export default class UpdateProfileScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Cập nhật thông tin',
  };

  render() {
    return (
      <ScrollView>
<View style={{margin: 5}}>
      <View style={styles.infor}>
         <Image source={img} style={styles.img} />
          <Text>Tải ảnh</Text>
      </View>
     <View style={{ margin: 5}}>
        <View style = {styles.container}>
          <Text style={styles.title}><Icon name="ios-person" color="#333"  size={16} iconStyle={{marginRight: 5}} />Tên hiển thị</Text>
          <TextInput style={styles.input} value="Roger"
            // onChange={(fullname) => this.setState}
          />
        </View>
        <View style = {styles.container}>
          
          <Text style={styles.title}><Icon name="ios-mail" color="#333"  size={16} iconStyle={{marginRight: 5}} />Email</Text>
          <TextInput style={styles.input} value="nts1997z@gmail.com" />
        </View>
        <View style = {styles.container}>
          <Text  style={styles.title}><Icon name="ios-phone-landscape" color="#333"  size={16} />Số điện thoại</Text>
          <TextInput style={styles.input} value="0977695448"/>
        </View>
        <View style = {styles.container}>
          <Text  style={styles.title}><Icon name="ios-person-add" color="#333"  size={16} />Địa chỉ</Text>
          <TextInput style={styles.input} value="Ngõ 133- Nguyễn Văn Trỗi - Hà Đông - Hà Nội" />
        </View>
         <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Update')}>
              <Text style={styles.inputLogin}>Cập nhật</Text>
          </TouchableOpacity> 
          </View>
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,    
  },
  infor: {
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    fontWeight: 'bold'
  },
    button: {
        // width: 300, 
        backgroundColor: '#9b0000',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10
    },
    inputLogin: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
      borderColor: '#ccc',
      backgroundColor:'rgba(255,255,255,0.3)',
      borderWidth: 1,
      height: 50
    }
});