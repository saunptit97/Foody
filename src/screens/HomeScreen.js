import React from 'react';
import { StyleSheet,Button, View, Text , TouchableOpacity , TextInput,Dimensions , Image , StatusBar , ScrollView, FlatList, ActivityIndicator} from 'react-native';
import ButtonSearch from '../components/ButtonSearch';
import Search from '../components/Search';
import BannerSlider from './../components/BannerSlider';
import Discover from '../components/Discover';
import RecentPost from '../components/RecentPost';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';

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

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.dataItem = firebase.database().ref('foods');
    this.dataStore = firebase.storage();
    this.state = {
      DiscoverMenu: [],
      column: false,
      quantity: 1,
      GridColumnsValue: true,
 
      ButtonDefaultText: 'CHANGE TO GRIDVIEW',
 
      isLoading: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} , quantity} = navigation.state;
    return{
      headerTitle: <TextInput  style={styles.inputBox} placeholder = "Tìm kiếm món ăn, nhà hàng, địa chỉ..."/>,
      // headerRight: <TouchableOpacity  >
      //                   <Text style={{color: "#fff"}}> <Icon name="md-cart" color="#fff"  size={35} />{quantity}</Text>
      //               </TouchableOpacity>,
      headerMode: 'none',
      headerStyle: {
        backgroundColor: '#d50000',
      },
    }
   
  };
  componentWillMount(){
    var DiscoverMenu = [];
    var self = this;
    this.dataItem.on('value', function(snapshot) {
      snapshot.forEach((doc) => {
        DiscoverMenu.push({
           key: doc.key,
           name: doc.toJSON().name,
           discription: doc.toJSON().discription,
           price: doc.toJSON().price,
           url: doc.toJSON().img
        });
        self.setState({DiscoverMenu: DiscoverMenu});
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
  
  formatprice(n, currency) {
    return n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + " " + currency;
  }
  listView(){
   return <ActivityIndicator/>
  }
  renderItem = ({item}) => {
    return(
      <View style={ this.state.GridColumnsValue ? styles.ListViewContainer : styles.GridViewContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.push('Detail',{
            id : (item.key)
          })} >
        <Image style={{width:150, height: 100}} source={{uri: item.url}}/>    
        </TouchableOpacity> 
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{this.formatprice(item.price, "đ")}</Text>
          <Text style={{fontSize: 12}}>Sau nguyen | 3 ngày trước</Text>
          <Icon name="md-cart" size={30} color="#9b0000" onPress={()=> this.props.navigation.push('Cart', {
              item : item.key
            })} />
        </View>    
      </View>
    )
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
    
        <StatusBar backgroundColor="#9b0000" barStyle="light-content" />
        <ScrollView>
          <BannerSlider style={{marginTop: 10, paddingTop: 10}}/>
          <Discover 
            navigate={this.props.navigation.navigate}
            routes= "Category"
          />
          <View style={ styles.view}>
          <Icon name="ios-list" color="#333"  size={30} style={{marginRight: 10}} iconStyle={{paddingLeft: 20, marginRight: 20}} onPress={this.ChangeListView}/>
          <Icon name="ios-grid" color="#333"  size={30} iconStyle={styles.container} onPress={this.ChangeGridValueFunction}/>
          
          </View>
              
          <View style={ styles.container}>
                <FlatList
                    data={ this.state.DiscoverMenu }
                    renderItem={ this.renderItem}
                    key = {( this.state.GridColumnsValue ) ? 'ONE COLUMN' : 'TWO COLUMN' }
                    numColumns = { this.state.GridColumnsValue ? 1 : 2 }
                />       
          </View>        
        </ScrollView>
      </View>
    );
  }
}

