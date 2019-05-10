import React,{Component} from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Alert,
    ToastAndroid
}
from 'react-native';
import firebase from 'firebase';
export default class FormSignup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            confpass: ''
        }
    }
   
    handleSignUp = () => {
        var {email, password, confpass}  = this.state;
        var errors = [];
        email == '' ?  errors.push('Bạn phải nhập email\n') : null;
        password == '' ? errors.push( 'Bạn phải nhập mật khẩu\n') : null;
        confpass == '' ? errors.push('Bạn phải xác nhận mật khẩu\n'): null;
        confpass != password ? errors.push( 'Bạn phải nhập giống mật khẩu'): null;
        if(errors.length >0){
            var notify = '';
            errors.forEach(value => {
                notify += value;
            });
            alert(notify);
        }else{
            var self = this.props.navigate;
            var self2 = this.props.destination;
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function(){
               var user = firebase.auth().currentUser
                firebase.database().ref('users/' + user.uid).set({
                    address: '',
                    email: user.email,
                    fullname: '',
                    image: '',
                    phone: ''
                });
                ToastAndroid.show('Đăng ký thàng công' , ToastAndroid.SHORT);
               self.self2;
            })
            .catch(error => Alert.alert(error.message))
            this.props.navigate(this.props.destination) 
        }
        // alert(this.state.email);
        

       
    }

    render(){
        return(
            <View style={styles.container}>
            {/* <KeyboardAvoidingView> */}
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Tài khoản"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    onChangeText={ (email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Mật khẩu"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={ (password) => this.setState({password})}
                    value={this.state.password}
                /> 
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Nhập lại mật khẩu"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={ (confpass) => this.setState({confpass})}
                    value={this.state.confpass}
                />
                <TouchableOpacity style={styles.button} onPress={() => {this.handleSignUp()}}>
                    <Text style={styles.inputLogin}>Đăng ký</Text>
                </TouchableOpacity>
            {/* </KeyboardAvoidingView> */}
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
