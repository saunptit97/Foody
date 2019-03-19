import React,{Component} from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Alert
}
from 'react-native';
//  import {firebaseApp} from './../config/Firebase.js';

// import firebase from 'react-native-firebase';
export default class FormSignup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
   
    // handleSignUp = () => {
    //     // firebase
    //     //     .auth()
    //     //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     //     .then(() => Alert.alert('Thành công'))
    //     //     .catch(error => this.setState({ errorMessage: error.message }))
    //     }

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
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Mật khẩu"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={ (password) => this.setState({password})}
                /> 
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Nhập lại mật khẩu"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => {this.Signup}}>
                    <Text style={styles.inputLogin}>{this.props.type}</Text>
                
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
