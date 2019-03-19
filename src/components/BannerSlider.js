import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-banner-carousel';
const BannerWidth = Dimensions.get('window').width - 10;
const BannerHeight = 200;
const images = [
  "https://images.foody.vn/biz_banner/foody-banner%20home-636874061023482463.jpg",
  "https://images.foody.vn/biz_banner/foody-banner%20home%20bbq-636856668072999886.jpg",
  "https://images.foody.vn/biz_banner/foody-banner%20home-desktop-web-(675x355)-opt2-636836564697454204.jpg"
];


export default class BannerSlider extends Component {
    renderPage(image, index) {
        let url = image;
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{uri : image}} />
            </View>
        );
    }
    render() {
        return (
            <View style={{marginTop: 10 , paddingHorizontal: 5}}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>      
            </View>        
                
        );
    }
}

