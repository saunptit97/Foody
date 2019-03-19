import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
export default class CartScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Giỏ hàng',
      };
    constructor(props) {
        super(props);
    
        this.state = {
          DiscoverMenu: [
            {
                key: 1, 
                name: "Sườn xào chua ngọt",
                description: "Đồng giá 30k - Just go order",
                url: require("../images/1.png")
            },
            { 
                key: 2, 
                name: "Sườn xào chua ngọt",
                description: "Đồng giá 30k - Just go order",
                url: require("../images/1.png")
            },
            { 
                key: 3, 
                name: "Sườn xào chua ngọt",
                description: "Đồng giá 30k - Just go orderĐồng giá 30k - Just go orderĐồng giá 30k - Just go order",
                url: require("../images/1.png")
            },
            { 
                key: 4, 
                name: "Sườn xào chua ngọt",
                description: "Đồng giá 30k - Just go order",
                url: require("../images/1.png")
            }
          ]
        };
      }
    render() {
        return (
            <View style={ styles.container}>
                <ScrollView>
                <View style= {{ width: '100%'}}>
                    <FlatList
                        data={ this.state.DiscoverMenu }
                        renderItem={ ({item}) =>
                        <View style={styles.GridViewContainer}>
                            <View style={styles.image_container}>
                                <Image style={styles.image} source={item.url} />
                            </View>
                            <View>
                                <Text style={styles.name} onPress={() => this.props.navigation.navigate('Signup')}> {item.name} </Text>
                                <Text style={styles.description}>Giá: 30.000 đ</Text>
                                <Text style={styles.description}>Số lượng: 1</Text>
                            </View>   
                        </View> }
                        numColumns={1}
                    />
                    <Text style={styles.total}>Tổng tiền: 120000 đ</Text>
                     <TouchableOpacity style={styles.buttonCart}>
                        <Text style={styles.inputCart} onPress = {() => this.props.navigation.navigate('Checkout') }>Thanh toán</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
          </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        margin: 10,
        borderBottomWidth: 8,
        borderColor: '#f6f8fa'
    },
    button: {
        width: 5,
        height: 5,
        backgroundColor: 'red',
        borderRadius: 5
    },
    image_container: {
        width: width/2 -50
    },
    image :{
       width: 150,
       height: 100,
       marginBottom: 10
    },
    GridViewContainer: {
        flex:1,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderColor : 'gray'
     },
     name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
      },
     description: {
         fontSize: 12,
         marginLeft: 5
     },
     total: {
         margin: 20
     },
     buttonCart: {
        // width: 300, 
        backgroundColor: '#9b0000',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10
    },
    inputCart: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    } 
});