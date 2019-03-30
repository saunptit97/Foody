import React from 'react';
import { StyleSheet,Button, View, Text , TouchableOpacity , TextInput,Dimensions , Image , StatusBar , ScrollView, FlatList} from 'react-native';
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
    flexDirection: 'row', 
    margin: 10,
    borderBottomWidth: 8,
    borderColor: '#f6f8fa'
  },
  image :{
      width: 150,
      height: 100
  },
  GridViewContainer: {
      flex:1,
      margin: 20,
  },
  name: {
      fontSize: 12,
      // fontWeight: 'bold',
      // color: '#000',
    },
  description: {
      fontSize: 10,
  },
  price: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5
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
}
});


export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.dataItem = firebase.database().ref('foods').orderByKey();
    this.dataStore = firebase.storage();
    this.state = {
      DiscoverMenu: [],
      column: false,
      quantity: 1
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
  // static navigationOptions = {
  //   // headerTitle instead of title
  //   headerTitle: <TextInput  style={styles.inputBox} placeholder = "Tìm kiếm món ăn, nhà hàng, địa chỉ..."/>,
  //   // headerTitle: <Search/>,
  //   headerRight: <TouchableOpacity  >
  //                     <Text style={{color: "#fff"}}> <Icon name="md-cart" color="#fff"  size={35} />1</Text>
  //                 </TouchableOpacity>,
  //   headerMode: 'none',
  //    headerStyle: {
  //     backgroundColor: '#d50000',
  //   },
  // };



  componentWillMount(){
    var DiscoverMenu = [];
    var self = this;
    this.dataItem.on('value', function(snapshot) {
      snapshot.forEach((doc) => {
        DiscoverMenu.push({
          //  key:doc.key,
           key: doc.key,
           name: doc.toJSON().name,
           discription: doc.toJSON().discription,
           price: doc.toJSON().price,
           url: doc.toJSON().img
        });
        self.setState({DiscoverMenu: DiscoverMenu});
        console.log(DiscoverMenu);
     }) 
    });
  }
  listView(){
    this.setState({
      column: true
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#9b0000" barStyle="light-content" />
        <ScrollView>
          <BannerSlider style={{marginTop: 10, paddingTop: 10}}/>
          <Discover 
            navigate={this.props.navigation.navigate}
            routes= "Category"
          />
          <TouchableOpacity onPress={()=> this.listView()}>
            <Text>List View</Text>
          </TouchableOpacity>
          <View style={ styles.container}>
                <FlatList
                    data={ this.state.DiscoverMenu }
                    renderItem={ ({item}) =>
                    <View style={styles.GridViewContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.push('Detail',{
                          id : (item.key)
                        })} >
                            <Image style={styles.image} source={{ uri: item.url }} />
                            <Text style={styles.name} numberOfLines={1} > {item.name} </Text>
                            <Text style={styles.price}>{item.price} đ</Text>
                            {/* <Text  numberOfLines={1} style={styles.description} > {item.discription} </Text> */}
                        </TouchableOpacity>  
                        <TouchableOpacity  style={styles.button} 
                          onPress={()=> this.props.navigation.push('Cart', {
                           item : 23
                          }) 
                        }>
                          <Text style={styles.inputLogin}>Thêm giỏ hàng</Text>
                        </TouchableOpacity>   
                    </View> }
                    numColumns={2}
                />       
          </View>        
        </ScrollView>
      </View>
    );
  }
}

