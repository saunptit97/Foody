/*
* @Author: Admin
* @Date:   2019-03-18 00:10:30
* @Last Modified by:   Admin
* @Last Modified time: 2019-03-20 00:02:53
*/
/*
* @Author: Admin
* @Date:   2019-03-18 00:10:30
* @Last Modified by:   Admin
* @Last Modified time: 2019-03-20 00:01:34
*/
import React from 'react';
import { Button, View, Text , TouchableOpacity} from 'react-native';
import firebase from 'firebase';
export default class FoodScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }
  // componentDidMount(){
  //   firebase.database().ref('/foods').once('value', (data)=>{
  //     let values = data.val();
  //     let items = Object.values(values);
  //     this.setState({items});
  //   });
  // }
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Danh sách sản phẩm',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
