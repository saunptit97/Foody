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

// const AppIndex = createAppContainer(AppNavigator);
export default class FastFoodScreen extends React.Component {
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
