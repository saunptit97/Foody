import React from 'react';
import { Button, View, Text , TouchableOpacity, StyleSheet, Image,ImageBackground, ScrollView, TextInput} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import img from './../images/logo.jpg';
import bg from './../images/bg.jpg';
import stringsoflanguages from './../languages/stringsolanguages';
export default class UpdateProfileScreen extends React.Component {
 
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
    headerTitle: 'Cập nhật thông tin',
  };
  handleUpdate = () => {
    const {fullname, email,phone,address} = this.state;
    var user = firebase.auth().currentUser;
    firebase.database().ref('users/' + user.uid).set(
      {
          fullname: fullname,
          email: email,
          phone: phone,
          address: address,
          image: 'https://example.com/jane-q-user/profile.jpg'
      }
      ).then(() => this.props.navigation.navigate('Profile')).catch((error) => {
          console.log(error);
      });
  }
  componentDidMount(){
    var user = firebase.auth().currentUser;
    // this.setState({
    //   fullname: 'Roger'
    // });
   firebase.database().ref('users/' + user.uid).once('value', (data)=>{
    this.setState({
      fullname: data.val().fullname,
      email: data.val().email,
      phone: data.val().phone,
      address: data.val().address,
      image: data.val().image,
    });
   }).then(function(data) {
      console.log('AA');
    });
  }
  render() {
    // var {fullname, email, phone,address} = this.state;
    // var user = firebase.auth().currentUser;
    // alert(user.uid);
   
    return (
      <ScrollView>
<View style={{margin: 5}}>
      <View style={styles.infor}>
         <Image source={img} style={styles.img} />
          <Text>Tải ảnh</Text>
      </View>
     <View style={{ margin: 5}}>
        <View style = {styles.container}>
          <Text style={styles.title}><Icon name="ios-person" color="#333"  size={16} iconStyle={{marginRight: 5}} />{stringsoflanguages.fullname}</Text>
          <TextInput style={styles.input} 
             onChangeText={ (fullname) => this.setState({fullname})}
             value = {this.state.fullname}
          />
        </View>
        <View style = {styles.container}>
          
          <Text style={styles.title}><Icon name="ios-mail" color="#333"  size={16} iconStyle={{marginRight: 5}} />Email</Text>
          <TextInput style={styles.input} 
           onChangeText={ (email) => this.setState({email})}
            value= {this.state.email}
          />
        </View>
        <View style = {styles.container}>
          <Text  style={styles.title}><Icon name="ios-phone-landscape" color="#333"  size={16} />{stringsoflanguages.phone}</Text>
          <TextInput style={styles.input} 
           onChangeText={ (phone) => this.setState({phone})}
           value = {this.state.phone}
          />
        </View>
        <View style = {styles.container}>
          <Text  style={styles.title}><Icon name="ios-person-add" color="#333"  size={16} />{stringsoflanguages.address}</Text>
          <TextInput style={styles.input} 
           onChangeText={ (address) => this.setState({address})}
           value = {this.state.address}
          />
        </View>
         <TouchableOpacity  style={styles.button}  onPress={this.handleUpdate}>
              <Text style={styles.inputLogin}>{stringsoflanguages.update}</Text>
          </TouchableOpacity> 
          </View>
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,    
  },
  infor: {
    alignItems: 'center',
    justifyContent: 'center'
    
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
    },
    input: {
      borderColor: '#ccc',
      backgroundColor:'rgba(255,255,255,0.3)',
      borderWidth: 1,
      height: 50
    }
});