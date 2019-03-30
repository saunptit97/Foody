import React from 'react';

import {View, TextInput, Text} from 'react-native';
export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
       <View>
          <TextInput placeholder = "Tìm kiếm món ăn, nhà hàng, địa chỉ..."/> <Text>Cart</Text>
       </View>
    );
  }
}