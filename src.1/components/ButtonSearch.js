import React from 'react';
import {TouchableOpacity, Text , StyleSheet} from 'react-native';
export default class ButtonSearch extends React.Component{
    render(){
      return(
        <TouchableOpacity>
            <Text style={styles.buttonBox}>Tìm kiếm</Text>
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
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
    fontWeight: 'bold'
  }
});  