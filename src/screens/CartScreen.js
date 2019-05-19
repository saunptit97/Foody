import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, TextInput,ToastAndroid, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import stringsolanguages from './../languages/stringsolanguages';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'
const width = Dimensions.get('window').width;
var radio_props = [
    {label: 'Sử dụng point', value: 1 }
  ];
class CartScreen extends Component {
    static navigationOptions = {
        headerTitle: `${stringsolanguages.cart}`,
      };
    constructor(props) {
        super(props);
    
        this.state = {
          DiscoverMenu: [],
          total: 0,
          coupon: "XZA12Z2", 
          discount: 0, 
          discountPoint:0,
          point: 0,
          statusPoint: false,
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
        var user = firebase.auth().currentUser;
        firebase.database().ref('users/' + user.uid).once('value', (data)=>{
          this.setState({
            point: data.val().point
          })
        });
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
    handleCouponCode(){
        var coupon = this.state.coupon;
        if(coupon != ""){
            firebase.database().ref("coupon/" + coupon).once('value',(data)=> {
                if(data.val()){
                    if(data.val().status == 0){
                        ToastAndroid.show('Mã giảm giá đã được sử dụng', ToastAndroid.SHORT);
                    }else{
                        ToastAndroid.show('Bạn sử dụng mã giảm giá thành công', ToastAndroid.SHORT);
                        this.setState({
                            coupon: "",
                            discount: this.state.discount + data.val().discount,
                            total: this.state.total > this.state.discount + data.val().discount ? this.state.total - this.state.discount - data.val().discount: 0
                        })
                    }
                }else{
                    ToastAndroid.show('Nhập mã không hợp lệ hãy thử lại', ToastAndroid.SHORT);
                }
            });
        }else{
            ToastAndroid.show('Vui lòng nhập mã giảm giá', ToastAndroid.SHORT);
        }
    }
    handlePoint(){
        this.setState({
            statusPoint: !this.state.statusPoint,
        })
       
        this.setState({
            // disconut: this.state.discount + this.state.point,
            total: this.state.total > this.state.point? this.state.total - this.state.point : 0,
            point: this.state.total > this.state.point ? 0 : this.state.total
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
                                <Image style={styles.image} source={{ uri: (item.img)}} />
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
                    <View style={{ flexDirection: "row", flex: 1}}>
                        <TextInput 
                        style = {{backgroundColor: '#f5f5f5', margin: 5, width: 200, height: 50, paddingLeft: 10, paddingRight: 10, color: '#202020'}}  
                        placeholder="Mã giảm giá" 
                        onChangeText = {(coupon) => this.setState({coupon})}
                        value= {this.state.coupon}
                        />
                        <TouchableOpacity style={{ backgroundColor: '#1979c3',paddingVertical: 12, marginVertical: 10}} onPress={() => this.handleCouponCode()}>
                            <Text style={{color:"#fff", paddingHorizontal: 20}}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                    <CheckBox
                        title='Sử dụng point'
                        checked={this.state.statusPoint}
                        onPress={() => this.handlePoint()}
                        />
                    { this.state.discount > 0 ? <Text style={styles.total}>Giảm giá: {this.formatprice(this.state.discount, "đ") }</Text > :<Text style={styles.total}></Text>}
                    <Text style={styles.total}>{stringsolanguages.total}: {this.formatprice(this.state.total, "đ") }</Text>
                     <TouchableOpacity style={styles.buttonCart}>
                        <Text style={styles.inputCart} onPress = {() => this.props.navigation.push('Checkout',{
                           total : (this.state.total),
                           coupon : (this.state.coupon),
                           point: (this.state.point), 
                           statusPoint: (this.state.statusPoint)
                        }) }>{stringsolanguages.checkout}</Text>
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
         marginTop: 5
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
      payload:product}),
      removeItems: () => dispatch({type:'REMOVE_ALL'})
    }
  }
  const mapStateToProps = (state) =>{
    const {cartItems}  = state;
    return {
      cartItems
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);