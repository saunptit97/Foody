import React,{Component} from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
}
from 'react-native';
export default class Form extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Tài khoản"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                />
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Mật khẩu"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={ () => this.props.navigate(this.props.destination)}>
                    <Text style={styles.inputLogin}>{this.props.type}</Text>
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
