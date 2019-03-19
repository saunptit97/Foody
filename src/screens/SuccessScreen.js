import React from 'react';
import { Button, View, Text , TouchableOpacity} from 'react-native';

export default class SuccessScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bạn đã đặt hàng thành công.</Text>
        <Text>Chúng tôi sẽ sớm liên lạc với bạn</Text>
        <Button
          title="Tiếp tục mua hàng"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
