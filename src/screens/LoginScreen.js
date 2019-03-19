import React,{Component} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    KeyboardAvoidingView
} from 'react-native';
import Logo from './../components/Logo';
import FormLogin from '../components/FormLogin';

export default class LoginScreen extends Component{
    static navigationOptions = {
        headerStyle:{
            backgroundColor: '#d50000',
            shadowRadius: 0,
            shadowOffset: {
            height: 0,
            },
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation:0
        }
      };
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
               
                <Logo />
                <FormLogin type="Đăng nhập" 
                    navigate={this.props.navigation.navigate}
                    destination = "Routes"
                /> 
                <View style={styles.signupText}> 
                    <Text style={{color: '#fff'}}>Bạn chưa có tài khoản?</Text>    
                    <Text style={styles.signup}  onPress={() => this.props.navigation.navigate('Signup')}>Đăng ký</Text>
                </View>                  
    
            </KeyboardAvoidingView>
            );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d50000',
    },
    signupText: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 10
    },
    signup: {
        color: '#fff',
        fontSize: 16
    }
  });
  
