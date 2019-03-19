import React from 'react';
import { Button, View, Text , TouchableOpacity} from 'react-native';

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
