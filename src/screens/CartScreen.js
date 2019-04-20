import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, TextInput,ToastAndroid, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import stringsolanguages from './../languages/stringsolanguages';
const width = Dimensions.get('window').width;
class CartScreen extends Component {
    static navigationOptions = {
        headerTitle: `${stringsolanguages.cart}`,
      };
    constructor(props) {
        super(props);
    
        this.state = {
          DiscoverMenu: [],
          total: 0
        };
      }
    componentWillMount(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        const self = this;
        var DiscoverMenu = [];
        var total = 0;
        DiscoverMenu = this.props.cartItems;
        for(var i  = 0 ; i< DiscoverMenu.length ; i++){
            total += DiscoverMenu[i].price;
        }
        this.setState({
            DiscoverMenu: DiscoverMenu,
            total : total
        })
    }  
    formatprice(n, currency) {
        return n.toFixed(0).replace(/./g, function(c, i, a) {
          return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
        }) + " " + currency;
    }
    handleRemoveItem(item){
        ToastAndroid.show('Delete item successfully', ToastAndroid.SHORT);
        this.props.removeItem(item);
        this.setState({
            total: this.state.total - item.price
        })
    }
    render() {
        return (
            <View style={ styles.container}>
                <ScrollView>
                { this.props.cartItems.length >0 ? 
                <View style= {{ width: '100%'}}>
                    <FlatList
                        data={ this.props.cartItems }
                        renderItem={ ({item}) =>
                        <View style={styles.GridViewContainer}>
                            <View style={styles.image_container}>
                                <Image style={styles.image} source={{ uri: item.url}} />
                            </View>
                            <View style={styles.image_container} >
                                <Text style={styles.name}> {item.name}</Text>
                                <Text style={styles.description}>{this.formatprice(item.price,"đ")}</Text>
                                <Text style={styles.description}>Số lượng: 1</Text>
                                <TouchableOpacity onPress = { () => this.handleRemoveItem(item)}>
                                <Image source={ require("./../images/remove-cart.png") }  style={{width: 50, height: 50}}/>
                                </TouchableOpacity>
                              
                            </View>   
                        </View> }
                        numColumns={1}
                    />
                    <Text style={styles.total}>{stringsolanguages.total}: {this.formatprice(this.state.total, "đ") }</Text>
                     <TouchableOpacity style={styles.buttonCart}>
                        <Text style={styles.inputCart} onPress = {() => this.props.navigation.navigate('Checkout') }>{stringsolanguages.checkout}</Text>
                    </TouchableOpacity>
                    </View>
                    : <Text>Không có sản phẩm nào</Text>}
                </ScrollView>
          </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row', 
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
        width: width/2 -20,
        marginLeft: 5
    },
    image :{
       width: '100%',
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

        // marginBottom: 5
      },
     description: {
         fontSize: 12,
        marginLeft: 5
         // marginLeft: 5
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
const mapDispatchToProps = (dispatch) =>{
    return {
      removeItem:(product) => dispatch({type:'REMOVE_FROM_CART',
      payload:product})
    }
  }
  const mapStateToProps = (state) =>{
    const {cartItems}  = state;
    return {
      cartItems
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);