import React from 'react';
import { Button, View, Text , TouchableOpacity, StyleSheet, Image,ImageBackground} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import img from './../images/logo.jpg';
import bg from './../images/bg.jpg';
import stringsoflanguages from './../languages/stringsolanguages';
export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fullname: '',
        email : '',
        phone: '',
        address: ''
    }
  }
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: `${stringsoflanguages.update_infor}`,
  };

  componentWillMount(){
    var user = firebase.auth().currentUser;
   firebase.database().ref('users/' + user.uid).once('value', (data)=>{
    this.setState({
      fullname: data.val().fullname,
      email: data.val().email,
      phone: data.val().phone,
      address: data.val().address,
    });
   }).then(function(data) {
      console.log('AA');
    });
  }
  render() {
  //   componentWillMount(){
  //   var config = {
  //     apiKey: "AIzaSyDuiS7bYSd_HIIx8fi2WKdUibJpw5CI42M",
  //     authDomain: "food-c4614.firebaseapp.com",
  //     databaseURL: "https://food-c4614.firebaseio.com",
  //     projectId: "food-c4614",
  //     storageBucket: "food-c4614.appspot.com",
  //     messagingSenderId: "752684496596"
  //   };
  //   firebase.initializeApp(config);
  // }
    var user = firebase.auth().currentUser;

    return (
      <View>
      <View style={styles.infor}>
         <Image source={img} style={styles.img} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{this.state.fullname}</Text>
   
       
      </View>
     <View style={{ margin: 5}}>
        <View style = {styles.container}>
          
          <Text style={styles.title}><Icon name="ios-mail" color="#333"  size={16} iconStyle={{marginRight: 5}} />Email</Text>
          <Text>{this.state.email}</Text>
        </View>
        <View style = {styles.container}>
          <Text  style={styles.title}><Icon name="ios-phone-landscape" color="#333"  size={16} />{stringsoflanguages.phone}</Text>
          <Text>{this.state.phone}</Text>
        </View>
        <View style = {styles.container}>
          <Text  style={styles.title}><Icon name="ios-person-add" color="#333"  size={16} />{stringsoflanguages.address}</Text>
          <Text>{this.state.address}</Text>
        </View>
         <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Update')}>
              <Text style={styles.inputLogin}>{stringsoflanguages.update_infor}</Text>
          </TouchableOpacity> 
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 5,
    borderColor: '#ccc', 
    
  },
  infor: {
  justifyContent: 'center', alignItems: 'center', 
  backgroundColor:'#e2e1e7',
  padding: 50
  
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    fontWeight: 'bold'
  },
    button: {
        // width: 300, 
        backgroundColor: '#9b0000',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10
    },
    inputLogin: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
});