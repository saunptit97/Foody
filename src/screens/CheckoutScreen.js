// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {KeyboardAvoidingView, View, TextInput, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity, Button} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import firebase from 'firebase';
// import {connect} from 'react-redux';
// import t from 'tcomb-form-native';
// const width = Dimensions.get('window').width;

// const Form = t.form.Form;
// var Checkout = t.struct({
//     firstname: t.String, 
//     lastname: t.String, 
//     email: t.Email,
//     phong: t.String, 
//     address: t.String
// });
// class CheckoutScreen extends Component {
//     constructor(props){
//         super(props);
//         this.state =  {
//             firstname : '',
//             lastname: '',
//             email: '',
//             phone: '',
//             address: ''
//         }
//     }

//     static navigationOptions = {
//         headerTitle: 'Thanh toán',
//       };
//     handleOrder(){
//         const {firstname, lastname, email, phone, address} = this.state;
//         const detail = this.props.cartItems;
//         var user = firebase.auth().currentUser;
//         var sum = 0;
//         for(var i  = 0 ; i< detail.length ; i++){
//             sum += detail[i].price;
//         }
//         // alert(sum);
    
//         firebase.database().ref("/orders").push({
//             user: user.uid,
//             firstname: firstname, 
//             lastname: lastname, 
//             email: email, 
//             phone: phone, 
//             address: address, 
//             detail: detail,
//             total: sum,
//             status: 0,
//             create_at: new Date().toLocaleString()
//         });
//         this.props.navigation.navigate("Success");
//     }  
//     render() {
//         return (
          
//             <KeyboardAvoidingView style={styles.container}>
//                 <ScrollView>
//                     <TextInput 
//                         style = {styles.textInput} 
//                         placeholder ="Tên riêng"
//                         onChangeText =  {(firstname) => this.setState({firstname})}
//                         value={this.state.firstname}
//                     />
//                     <TextInput 
//                         style = {styles.textInput} 
//                         placeholder="Tên đệm"
//                         onChangeText = {(lastname) => this.setState({lastname})}
//                         value= {this.state.lastname}
//                         />
//                     <TextInput 
//                         style = {styles.textInput} 
//                         placeholder="Email"
//                         onChangeText = {(email) => this.setState({email})}
//                         value= {this.state.email}
//                         />
//                     <TextInput 
//                         style = {styles.textInput} 
//                         placeholder="Số điện thoại"
//                         onChangeText = {(phone) => this.setState({phone})}
//                         value= {this.state.phone}
//                         />
//                     <TextInput 
//                         style = {styles.textInput}  
//                         placeholder="Địa chỉ nhận hàng" 
//                         onChangeText = {(address) => this.setState({address})}
//                         value= {this.state.address}
//                         />
//                 </ScrollView>
                
//                 <TouchableOpacity style={styles.buttonCart} onPress = {() => this.handleOrder() }>
//                     <Text style={styles.inputCart} >Thanh toán</Text>
//                 </TouchableOpacity>
//             </KeyboardAvoidingView>
               
               
            
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container : {
//         margin: 20
//     },
//     textInput : {
//         backgroundColor: '#f5f5f5',
//         margin: 10,
//         paddingLeft: 15,
//         borderRadius: 25,
//         color: '#202020'
//     },
//     buttonCart: {
//         // width: 300, 
//         backgroundColor: '#9b0000',
//         borderRadius: 25,
//         paddingVertical: 12,
//         marginVertical: 10,
//         margin: 10
//     },
//     inputCart: {
//         color: '#fff',
//         fontSize: 16,
//         textAlign: 'center',
//     } 
// });


// const mapStateToProps = (state) =>{
//     return {
//       cartItems : state
//     }
//   }
// export default connect(mapStateToProps)(CheckoutScreen);

import React, { Component } from 'react';
import { StyleSheet, View, Button , TouchableOpacity, Text} from 'react-native';
import t from 'tcomb-form-native';
import stringsolanguages from './../languages/stringsolanguages'
const Form = t.form.Form;
const User = t.struct({
  firstname: t.String,
  lastname: t.String,
  email: t.String,
  phone: t.String,
  address: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const options = {
  order: ['firstname', 'lastname', 'email','phone','address'],
  fields: {
    firstname: {
      label: '',
      placeholder: 'Tên riêng',
      error: 'Bạn không được bỏ trống trường tên riêng',
    },
    lastname: {
      placeholder: 'Tên đệm',
      error: 'Bạn không được bỏ trống trường tên đệm'
    },
    email: {
      placeholder: 'Email',
      error: 'Bạn không được bỏ trống email'
    },
    phone: {
        placeholder: 'Số điện thoại',
        error: 'Bạn không được bỏ trống số điện thoại'
    },
    address:{
        placeholder: 'Địa chỉ nhận hàng',
        error: 'Bạn không được bỏ trống địa chỉ'
    }
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    alert(value.firstname);
    console.log('value: ', value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
       
        
                 <TouchableOpacity style={styles.buttonCart} onPress = {() => this.handleSubmit() }>
                     <Text style={styles.inputCart} >{stringsolanguages.checkout}</Text>
                 </TouchableOpacity>
      </View>
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
  ,
});
