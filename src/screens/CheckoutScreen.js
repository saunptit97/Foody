import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {KeyboardAvoidingView, View, TextInput, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import {connect} from 'react-redux';
import t from 'tcomb-form-native';
const width = Dimensions.get('window').width;

class CheckoutScreen extends Component {
    constructor(props){
        super(props);
        this.state =  {
            fullname: '',
            email: '',
            phone: '',
            address: ''
        }
    }

    static navigationOptions = {
        headerTitle: 'Thanh toán',
      };
    handleOrder(){
        const {fullname, email, phone, address} = this.state;
        const { navigation } = this.props;
        const total = navigation.getParam('total');
        const coupon = navigation.getParam('coupon');
        const point = navigation.getParam('point');
        const statusPoint = navigation.getParam('statusPoint');
        var pointPlus = 0;
   
        pointPlus = point + total*0.1;
        
        const detail = this.props.cartItems;
        var user = firebase.auth().currentUser;
        firebase.database().ref("/orders").push({
            user: user.uid,
            fullname: fullname,
            email: email, 
            phone: phone, 
            address: address, 
            detail: detail,
            total: total,
            status: 0,
            create_at: new Date().toLocaleString()
        });
        firebase.database().ref("coupon/"+ coupon).update({
            status: 0
        })
        var user = firebase.auth().currentUser;
        firebase.database().ref('users/' + user.uid).update({
            point: pointPlus
        })
        this.props.removeItems();
        this.props.navigation.navigate("Success");
    } 
    componentWillMount(){
        var user = firebase.auth().currentUser;
        firebase.database().ref('users/' + user.uid).once('value', (data)=>{
         this.setState({
           fullname: data.val().fullname,
           email: data.val().email,
           phone: data.val().phone,
           address: data.val().address,
         });
        })
    } 
    render() {
        return (
          
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <TextInput 
                        style = {styles.textInput} 
                        placeholder ="Tên"
                        onChangeText =  {(fullname) => this.setState({fullname})}
                        value={this.state.fullname}
                    />
                   
                    <TextInput 
                        style = {styles.textInput} 
                        placeholder="Email"
                        onChangeText = {(email) => this.setState({email})}
                        value= {this.state.email}
                        />
                    <TextInput 
                        style = {styles.textInput} 
                        placeholder="Số điện thoại"
                        onChangeText = {(phone) => this.setState({phone})}
                        value= {this.state.phone}
                        />
                    <TextInput 
                        style = {styles.textInput}  
                        placeholder="Địa chỉ nhận hàng" 
                        onChangeText = {(address) => this.setState({address})}
                        value= {this.state.address}
                        />
                </ScrollView>
                
                <TouchableOpacity style={styles.buttonCart} onPress = {() => this.handleOrder() }>
                    <Text style={styles.inputCart} >Thanh toán</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
               
               
            
        );
    }
}

const styles = StyleSheet.create({
    container : {
        margin: 20
    },
    textInput : {
        backgroundColor: '#f5f5f5',
        margin: 10,
        paddingLeft: 15,
        borderRadius: 25,
        color: '#202020'
    },
    buttonCart: {
        // width: 300, 
        backgroundColor: '#9b0000',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10,
        margin: 10
    },
    inputCart: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    } 
});


const mapStateToProps = (state) =>{
    return {
      cartItems : state
    }
  }
const mapDispatchToProps = (dispatch) =>{
return {
    removeItem:(product) => dispatch({type:'REMOVE_FROM_CART',
    payload:product}),
    removeItems: () => dispatch({type:'REMOVE_ALL'})
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
