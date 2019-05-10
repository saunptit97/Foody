import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Image, Dimensions, StyleSheet, Text, FlatList , Alert ,TouchableOpacity} from 'react-native';


export default class Discover extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          DiscoverMenu: [
            { 
                key: "Món ăn",
                url: require("../images/food.png")
            },
            { 
                key: "Đồ uống", 
                url: require("../images/restaurant.png")
            },
            {
                key: "Giao hàng",
                url: require("../images/delivery.png")
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
                       <TouchableOpacity onPress={()=> this.props.navigate(this.props.routes)}>
                       {/* <TouchableOpacity> */}
                            <Image style={styles.image} source={item.url} />
                            <Text style={styles.GridViewTextLayout} > {item.key} </Text>
                        </TouchableOpacity>  
                    </View> }
                    numColumns={3}
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
        borderColor: '#f6f8fa',
       
    },
    image :{
        width: 80,
        height: 80
    },
    GridViewContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

        // backgroundColor: '#7B1FA2'
     },
     GridViewTextLayout: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#000',
        padding: 10,
      }
});