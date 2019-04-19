import React from 'react';
import {TouchableOpacity,View, Text, Button, Image, StyleSheet} from 'react-native';
import firebase from 'firebase';
const url = "./../images/1.png";
export default class DetailScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        price: 0,
        address: '',
        discription: '',
        img: ''
      }
    }
    componentDidMount(){
      const { navigation } = this.props;
      const id = navigation.getParam('id');
      const self = this;
      firebase.database().ref("foods/" + id).once('value', function(data){
        self.setState({
          name: data.val().name,
          price: data.val().price,
          address: data.val().address,
          discription: data.val().discription,
          img: data.val().img
        });
        filename = data.val().img
      });
    }
    render() {
      let {name, price, address, discription, img} = this.state;
      return (
        <View>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: img}} />
          <Text style={styles.name}>{name}</Text>
          <Text style={{marginBottom : 20}}>{price} đ</Text>
        </View>
        <View style={styles.container}>
            <Text>* Địa chỉ: {address}</Text>
            <Text>* Tên cửa hàng: Shop Online VietNam</Text>
            <Text>* Giờ làm việc: 7:00 - 22:00</Text>
            <Text style={{color: 'blue'}}>{discription}</Text>
             <TouchableOpacity  style={styles.button}>
                    <Text style={styles.inputLogin}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>   
        </View>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    margin: 10
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
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
    }
});
  