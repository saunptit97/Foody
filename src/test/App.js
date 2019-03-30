import React from 'react';
import {View , Text, TouchableOpacity, Image, FlatList} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
import firebase from 'firebase';
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
             avatarSource: null,
            dataSource: []
        }            
        
    }
    PickImage(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
    
            // alert();
              this.setState({
                avatarSource: response.uri,
              });
              alert(response.uri);
            }
        });    
    }
    componentWillMount(){
        var config = {
          apiKey: "AIzaSyDuiS7bYSd_HIIx8fi2WKdUibJpw5CI42M",
          authDomain: "food-c4614.firebaseapp.com",
          databaseURL: "https://food-c4614.firebaseio.com",
          projectId: "food-c4614",
          storageBucket: "food-c4614.appspot.com",
          messagingSenderId: "752684496596"
        };
        firebase.initializeApp(config);
      }
      setDB(){
          firebase.database().ref('KhoaHoc').set({
            ReactNative: 'khaigiang20/3'
          });
      }
      pushDB(){
          firebase.database().ref('FoodyReactNative').child('foods').push({
            ReactNative: 'khaigiang20/3',
            Android: 'khaigiang20/3'
          })
      }
    componentDidMount(){
        var items = [];
        firebase.database().ref('FoodyReactNative').child('foods').on('child_added',(dataSnapshot)=>{
            // items.push({
            //     name: dataSnapshot.val(),
            //     key: dataSnapshot.key
            // });
            // this.setState({
            //     dataSource: items
            // });
            // alert(dataSnapshot.val().ReactNative);
        });
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress = {()=> this.PickImage()} >
                    <Image source={this.state.avatarSource} styles={{height: 150, width: 20}}/>
                    <Text>Upload file</Text> 
                  
            
                 </TouchableOpacity> 
                {/* <Text>AA</Text> */}
                {/* <FlatList
                    dataSource={this.state.dataSource}
                    renderRow = {(rowData) => {
                        <View>
                            <Text>{rowData.name}</Text>
                        </View>
                    }}
                /> */}
            </View>
        );
    }
  
}