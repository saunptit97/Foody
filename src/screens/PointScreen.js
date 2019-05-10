/*
* @Author: Admin
* @Date:   2019-03-18 00:10:30
* @Last Modified by:   Admin
* @Last Modified time: 2019-03-20 00:01:34
*/
import React from 'react';
import { Button, View, Text , TouchableOpacity} from 'react-native';
import firebase from 'firebase';
export default class PointScreen extends React.Component {
  state = {
    point: 0,
    coupon: []
  }
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Điểm tích lũy',
  };
  componentWillMount(){
    var user = firebase.auth().currentUser;
    firebase.database().ref('users/' + user.uid).once('value', (data)=>{
      this.setState({
        point: data.val().point,
        coupon: data.val().coupon
      })
    });
    
  }
  render() {
    return (
      <View style={{ flex: 1 , margin: 20}}>
        <Text>Điểm tích lũy</Text>
        <Text>Bạn đang có: {this.state.point}</Text>
      </View>
    );
  }
}
