import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const url = "./../images/1.png";
export default class DetailScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 , margin: 10}}>
          <View style={styles.container}>
            <Image style={styles.image} source={require("./../images/1.png") } />
          </View>
          <View>
            <Text >Sườn xào chua ngọt</Text>
            <Text></Text>
          </View>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginTop: 20,
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 100
  }
});
  