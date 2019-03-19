import React from 'react';
import { Button, View, Text , TouchableOpacity} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}><Text>AA</Text></TouchableOpacity>
      </View>
    );
  }
}
