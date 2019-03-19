import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {KeyboardAvoidingView, View, TextInput, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const width = Dimensions.get('window').width;
export default class CartScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Thanh toán',
      };
    render() {
        return (
          
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <TextInput style = {styles.textInput} placeholder ="Tên riêng"/>
                    <TextInput style = {styles.textInput} placeholder="Tên đệm"/>
                    <TextInput style = {styles.textInput} placeholder="Email"/>
                    <TextInput style = {styles.textInput} placeholder="Số điện thoại"/>
                    <TextInput style = {styles.textInput} placeholder="Địa chỉ"/>
                    <TextInput style = {styles.textInput}  placeholder="Địa chỉ nhận hàng" />
                </ScrollView>
                
                <TouchableOpacity style={styles.buttonCart}>
                    <Text style={styles.inputCart} onPress = {() => this.props.navigation.navigate('Success') }>Thanh toán</Text>
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