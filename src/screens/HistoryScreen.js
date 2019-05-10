import React from 'react';
import { Button, View, Text , TouchableOpacity , FlatList} from 'react-native';
import firebase from 'firebase';

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Lịch sử mua hàng',
  };
  state = {
    History: []
  }
  componentWillMount(){
    var user = firebase.auth().currentUser;
    var History = [];
    var self = this;
    firebase.database().ref("/orders").on('value', function(snapshot) {
        snapshot.forEach((doc) => {
          if(doc.child('user').toJSON() == user.uid){
            History.push({
              id: doc.key,
              total: doc.toJSON().total,
              status: doc.toJSON().status
            });
            self.setState({
              History: History
            })
          }
        });
    });
  
  }
  renderItem = ({item}) => {
    return(
     <View style={{ padding: 20, backgroundColor: "#f8f8f8", margin: 10}}>
       <Text>Mã hóa đơn: {item.id}</Text>
       <Text>Tổng tiền: {item.total}</Text>
       <Text>Tình trạng: {item.status ==0 ? "Đang xử lý" : "Đã hoàn thành"}</Text>
     </View>
    )
  }
  render() {
   if(this.state.History.length == 0){
     return (
       <View>
         <Text>Bạn chưa thực hiện giao dịch nào</Text>
       </View>
     )
   }
    return (
      <View style={{ flex: 1}}>
        <FlatList
            data={ this.state.History }
            renderItem={ this.renderItem}
            key = "order"
            numColumns = { 1 }
        />    
      </View>
    );
  }
}
