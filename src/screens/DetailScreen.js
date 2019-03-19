import React from 'react';
import {TouchableOpacity,View, Text, Button, Image, StyleSheet} from 'react-native';

const url = "./../images/1.png";
export default class DetailScreen extends React.Component {
    render() {
      return (
        // <View style={{ flex: 1 , margin: 10}}>
        //   
        //   <View>
        //     <Text >Sườn xào chua ngọt</Text>
        //     <Text></Text>
        //   </View>
        // </View>
        <View>

        <View style={styles.container}>
          <Image style={styles.image} source={require("./../images/1.png") } />
          <Text style={styles.name}>Sườn xào chua ngọt</Text>
          <Text style={{marginBottom : 20}}>30000 đ</Text>
        </View>
        <View style={styles.container}>
            <Text>* Địa chỉ: Ngõ 133 Nguyễn Văn Trỗi- Hà Đông - Hà Nội</Text>
            <Text>* Tên cửa hàng: Shop Online VietNam</Text>
            <Text>* Giờ làm việc: 7:00 - 22:00</Text>
            <Text style={{color: 'blue'}}>Xem chi tiết thông tin</Text>
             <TouchableOpacity  style={styles.button}>
                    <Text style={styles.inputLogin}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>   
        </View>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    margin: 10
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
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
  