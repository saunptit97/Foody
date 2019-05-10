import React from 'react';
import { StyleSheet,Button, ToastAndroid,AsyncStorage, View, Text ,TouchableOpacity , TextInput,Dimensions , Image , StatusBar , ScrollView, FlatList, ActivityIndicator} from 'react-native';
import ButtonSearch from '../components/ButtonSearch';
import Search from '../components/Search';
import BannerSlider from './../components/BannerSlider';
import Discover from '../components/Discover';
import RecentPost from '../components/RecentPost';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { SearchBar } from 'react-native-elements';
import stringsolanguages from './../languages/stringsolanguages';
import { isForOfStatement } from '@babel/types';
// import _ from 'lodash';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor:'#eff0f1',
    borderRadius: 10,
    color: '#333',
    fontSize: 16,
    marginTop: 9,
    marginBottom: 10,
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10
  },
  buttonBox: {
    backgroundColor: '#eff0f1',
    height: 35,
    width: 35,
    color: '#333',
    borderRadius: 25,
    fontSize: 16,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    fontWeight: 'bold'
  },
  container: {
    flex: 1, 
    margin: 20,
    borderBottomWidth: 8,
    borderColor: '#f6f8fa'
  },
  view: {
    flexDirection: 'row', 
    marginLeft: 20,
  },
  image :{
      width: 150,
      height: 100
  },
  GridViewContainer: {
    flex: 1, flexDirection : "column", marginBottom: 10
  },
  ListViewContainer: {
    flex: 1, flexDirection : "row", marginBottom: 10
  },
  name: {
      fontSize: 18,
      color: 'green',
      marginBottom: 7
    },
  description: {
      fontSize: 10,
  },
  price: {
    fontSize: 16,
    color: 'red',
    // marginLeft: 5
  },
  cart: {
    borderRadius: 25,
    height: 50,
    color: 'red'
  } ,
  button: {
    marginTop: 5,
    backgroundColor: '#9b0000',
    borderRadius: 25,
    paddingVertical: 5,
    marginRight: 0
    // marginVertical: 10
},
inputLogin: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
},
});

class NewScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.dataItem = firebase.database().ref('foods').limitToLast(10);
    this.dataStore = firebase.storage();
    this.state = {
      DiscoverMenu: [],
      column: false,
      quantity: 1,
      GridColumnsValue: false,
      ButtonDefaultText: 'CHANGE TO GRIDVIEW',
      isLoading: false,
      arrayholder : [],
      search :""
    };
  }
  searchFilterFunction = text => {    
    this.setState({
      search: text
    })
    const newData = this.state.arrayholder.filter(item => {      
      const itemData = item.name.toUpperCase();
      console.log(itemData);
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;   
    });    
    this.setState({ DiscoverMenu: newData });  
  };
  static navigationOptions = ({ navigation }) => {
    const { params = {} , quantity} = navigation.state;
    return{
      headerMode: 'none',
      header: null,
      navigationOptions: {
          headerVisible: false,
      }
    }
   
  };
  componentWillMount(){
    stringsolanguages.setLanguage(this.props.language);
    var currency = this.props.currency;
    var DiscoverMenu = [];
    var self = this;
    this.dataItem.on('value', function(snapshot) {
      snapshot.forEach((doc) => {
        var price = currency == 'vnd' ? doc.toJSON().price : doc.toJSON().price_usd;
       
          DiscoverMenu.push({
            key: doc.key,
            name: doc.toJSON().name,
            discription: doc.toJSON().discription,
            price: price,
            img: doc.toJSON().img
         });
        
          self.setState({
            DiscoverMenu: DiscoverMenu,
            arrayholder : DiscoverMenu,
            isLoading: true
          });
     }) 
    });
  }
  ChangeGridValueFunction =()=> {
    this.setState({  
        GridColumnsValue: false       
    })
 }
 ChangeListView =()=> {
      this.setState({
          GridColumnsValue: true, 
      })
  
  }
  addToCart = (item) => {
    AsyncStorage.setItem("items", item);
    
    const retrievedItem  = AsyncStorage.getItem("items");
    alert(retrievedItem);
  }
  formatprice(n, currency) {
    return n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + " " + currency;
  }
  listView(){
   return <ActivityIndicator/>
  }
  handleAddCart = (item) => {
    this.props.addItemToCart(item);
    ToastAndroid.show('Successfully added item to cart!', ToastAndroid.SHORT)
}
  renderItem = ({item}) => {
    return(
      <View style={styles.GridViewContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.push('Detail',{
            id : (item.key),
            name: (item.name)
          })} >
        <Image style={{width:150, height: 100}} source={{uri: item.img}}/>    
        </TouchableOpacity> 
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{this.formatprice(item.price, this.props.currency == 'vnd'? "đ" : "$")}</Text>
          <Text style={{fontSize: 12}}>Sau nguyen | 3 ngày trước</Text>
             <Icon name="md-cart" size={30} color="#9b0000" onPress= {() => this.handleAddCart(item)} />
        </View>    
      </View>
    )
  }
  
  render() {
    stringsolanguages.setLanguage(this.props.language);
    if(!this.state.isLoading){
      return (
        <View styles={{flex: 1, justifyContent:"center", textAlign:"center"}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#9b0000" barStyle="light-content" />
        <ScrollView style={{flex: 1}}>
         <View style={ styles.container}>
                <FlatList
                    data={ this.state.DiscoverMenu }
                    renderItem={ this.renderItem}
                    key = {( this.state.GridColumnsValue ) ? 'ONE COLUMN' : 'TWO COLUMN' }
                    numColumns = {2}
                />       
          </View>        
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
    payload:product})
  }
}
const mapStateToProps = (state) =>{
  const {cartItems, language, currency} = state;
  return {
    cartItems, language, currency
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewScreen);