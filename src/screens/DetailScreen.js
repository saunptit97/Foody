import React from 'react';
import {TouchableOpacity,View, Text, Button, Image, ToastAndroid,StyleSheet} from 'react-native';
import stringsoflanguages from './../languages/stringsolanguages';
import firebase from 'firebase';
import {connect} from 'react-redux';
const url = "./../images/1.png";
class DetailScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        price: 0,
        address: '',
        discription: '',
        img: '',
        item: {}
      }
    }
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('name'),
      };
    };
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
          img: data.val().img,
          item: {
            name: data.val().name,
            price: data.val().price,
            img: data.val().img,
          }
        });
        filename = data.val().img
      });
    }
    handleAddCart = (item) => {
      this.props.addItemToCart(item);
      ToastAndroid.show('Successfully added item to cart!', ToastAndroid.SHORT)
  }
    render() {
      let {name, price, address, discription, img, item} = this.state;
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
             <TouchableOpacity  style={styles.button} onPress= {() => this.handleAddCart(item)}>
                    <Text style={styles.inputLogin}>{stringsoflanguages.addtocart}</Text>
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
const mapDispatchToProps = (dispatch) =>{
  return {
    addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
    payload:product})
  }
}
const mapStateToProps = (state) =>{
  const {cartItems, language} = state;
  return {
    cartItems, language
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);