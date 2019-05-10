import React,{Component} from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
}
from 'react-native';
import firebase from 'firebase';
export default class Form extends Component{
   constructor(props){
        super(props);
        this.state = {
            email: 'Nts1997z@gmail.com',
            password: 'Nts0977695448'
        }
    }
   
    handleSignIn = ()=>{
    const { email , password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => this.props.navigate(this.props.destination) ).catch(function(error) {
      alert(error);
    });
  }
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Tài khoản"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    onChangeText= {(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Mật khẩu"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText= {(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity  style={styles.button}   onPress={this.handleSignIn}>
                    <Text style={styles.inputLogin}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },  
    inputBox:{
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingLeft: 20,
        marginVertical: 10,
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 10
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
