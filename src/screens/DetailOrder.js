/*
* @Author: Admin
* @Date:   2019-03-18 00:10:30
* @Last Modified by:   Admin
* @Last Modified time: 2019-03-20 00:01:34
*/
import React from 'react';
import { Button, View, Text , TouchableOpacity, FlatList} from 'react-native';
import firebase from 'firebase';
export default class DetailOrder extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Chi tiết hóa đơn',
  };
  state = {
      detail: [],
      total: 0,
      status: 0
  }
  componentWillMount(){
      var id = this.props.navigation.getParam("id");
      var total = this.props.navigation.getParam("total");
      firebase.database().ref('orders/'+ id+"/detail").once('value', (data)=>{
        this.setState({
          detail: data.val().cartItems
        })
      });
  }
  formatprice(n, currency) {
    return n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + " " + currency;
  }
  renderItem = ({item}) => {
    return(
     <View style={{ padding: 20, backgroundColor: "#f8f8f8", margin: 10}}>
        <Text>{item.name}</Text>
        <Text>{this.formatprice(item.price, 'đ')}</Text>
     </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
        <Text>Mã hóa đơn: {this.props.navigation.getParam("id")}</Text>
        <Text>Tình trạng đơn hàng: {this.props.navigation.getParam("status") ==0 ? "Đang xử lý" : "Đã hoàn thành"}</Text>
        <Text>Tổng tiền: {this.props.navigation.getParam("total")}</Text>
        <FlatList
            data={ this.state.detail }
            renderItem={ this.renderItem}
            key = "order"
            numColumns = { 1 }
        /> 
      </View>
    );
  }
}
