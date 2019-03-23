import React from 'react';
import { StyleSheet,Button, View, Text , TouchableOpacity , TextInput,Dimensions , Image , StatusBar , ScrollView, FlatList} from 'react-native';
import ButtonSearch from '../components/ButtonSearch';
import Search from '../components/Search';
import BannerSlider from './../components/BannerSlider';
import Discover from '../components/Discover';
import RecentPost from '../components/RecentPost';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor:'#eff0f1',
    borderRadius: 10,
    color: '#333',
    fontSize: 16,
    marginTop: 9,
    marginBottom: 10,
    width: width - 20,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10
  },
  buttonBox: {
    backgroundColor: '#eff0f1',
    height: '68%',
    color: '#333',
    borderRadius: 10,
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
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
  description: {
      fontSize: 10,
  } 
});


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DiscoverMenu: [
        {
            key: 1, 
            name: "Sườn xào chua ngọt",
            description: "Đồng giá 30k - Just go order",
            url: require("../images/1.png")
        },
        { 
            key: 2, 
            name: "Sườn xào chua ngọt",
            description: "Đồng giá 30k - Just go order",
            url: require("../images/1.png")
        },
        { 
            key: 3, 
            name: "Sườn xào chua ngọt",
            description: "Đồng giá 30k - Just go orderĐồng giá 30k - Just go orderĐồng giá 30k - Just go order",
            url: require("../images/1.png")
        },
        { 
            key: 4, 
            name: "Sườn xào chua ngọt",
            description: "Đồng giá 30k - Just go order",
            url: require("../images/1.png")
        }
      ]
    };
  }
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <TextInput  style={styles.inputBox} placeholder = "Tìm kiếm món ăn, nhà hàng, địa chỉ..."/>,
    // headerTitle: <Search/>,
    // headerRight: <ButtonSearch/>
    headerMode: 'none',
     headerStyle: {
      backgroundColor: '#d50000',
    },
  };
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };


  render() {
    const { search } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#9b0000" barStyle="light-content" />
        <ScrollView>
          <BannerSlider style={{marginTop: 10, paddingTop: 10}}/>
          <Discover/>
          <View style={ styles.container}>
                <FlatList
                    data={ this.state.DiscoverMenu }
                    renderItem={ ({item}) =>
                    <View style={styles.GridViewContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} >
                            <Image style={styles.image} source={item.url} />
                            <Text style={styles.name} > {item.name} </Text>
                            <Text  numberOfLines={1} style={styles.description} > {item.description} </Text>
                          
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

