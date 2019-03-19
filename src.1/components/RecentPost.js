import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Image, Dimensions, StyleSheet, Text, FlatList , TouchableOpacity} from 'react-native';


export default class RecentPost extends Component {
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
    render() {
        return (
            <View style={ styles.container}>
                <FlatList
                    data={ this.state.DiscoverMenu }
                    renderItem={ ({item}) =>
                    <View style={styles.GridViewContainer}>
                        <TouchableOpacity  >
                            <Image style={styles.image} source={item.url} />
                            <Text style={styles.name} onPress={() => this.props.navigation.navigate('Signup')}> {item.name} </Text>
                            <Text  numberOfLines={1} style={styles.description} > {item.description} </Text>
                        </TouchableOpacity>  
                    </View> }
                    numColumns={2}
                />       
          </View>        
        );
    }
}

const styles = StyleSheet.create({
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