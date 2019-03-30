import React from 'react';
import {TouchableOpacity, Text , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ButtonSearch extends React.Component{
    render(){
      return(
        <TouchableOpacity>
            <Text style={styles.buttonBox}><Icon name="md-cart" color="red"  size={16} />1</Text>
        </TouchableOpacity>
      )
    }
  }

const styles = StyleSheet.create({
  buttonBox: {
    backgroundColor: '#eff0f1',
    height: '68%',
    marginTop: 10,
    color: '#333',
    borderRadius: 25,
    marginVertical: 10,
    fontSize: 16,
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
    fontWeight: 'bold'
  }
});  