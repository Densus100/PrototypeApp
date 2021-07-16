import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform, StatusBar, Image, ScrollView, ImageBackground, } from 'react-native'
import HeaderHome from '../components/HeaderHome'
import Animated from 'react-native-reanimated'
import Wonder from '../config/Image'
import Background from '../config/Background'
import Carousel from '../components/Carousel'
import DetailContent from '../components/DetailContent'
import HorisontalItem from '../components/HorisontalItem'
import HorisontalSlider from '../components/HorisontalSlider'


let HEADER_HEIGHT = Platform.OS == 'ios' ? 115 : 70 + StatusBar.currentHeight
if (Platform.OS == 'web') {
    HEADER_HEIGHT = 95

}
const tourists = require('../../tourist.json');
var demo = [];
for (var i = 0; i < 8; i++) {
    demo.push(tourists[i]);
}


export default class Home extends Component {

    render() {
        console.log(HEADER_HEIGHT)
        const scrollY = new Animated.Value(0)
        const diffClamScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT)
        const headerY = Animated.interpolate(diffClamScrollY, {
            inputRange: [0, HEADER_HEIGHT],
            outputRange: [0, -HEADER_HEIGHT]
        })
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderHome {...this.props} user="Candidate Name" headerHeight={HEADER_HEIGHT} headerY={headerY} ></HeaderHome>
                <Animated.ScrollView
                    bounces={false}
                    scrollEventThrottle={16}
                    style={{ paddingTop: HEADER_HEIGHT - 5 }}
                    onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: scrollY } }
                    }])}
                >

                    <ImageBackground source={Background.image[0]} style={styles.background}>
                        <HorisontalSlider {...this.props} items={demo}></HorisontalSlider>
                    </ImageBackground>




                    <DetailContent
                        title="Best Tourism Attraction"
                        desc="Top tourism attarction of Wonderfull Indonesia" />



                    <HorisontalItem {...this.props} items={demo}></HorisontalItem>


                    <DetailContent
                        title="Top 10 Destination"
                        desc="The best trending destination of Wonderfull Indonesia" />


                    <Carousel {...this.props} data={demo}></Carousel>

                    {tourists.map((tour) => (
                        <View key={tour.id} style={styles.contoh} >
                            <Image key={tour.id} style={styles.gambar} source={Wonder.image[tour.id]} ></Image>
                        </View>
                    ))}

                </Animated.ScrollView>
            </View >

        )
    }
}

const styles = StyleSheet.create({
    contoh: {
        margin: 20,
        height: 400,
        paddingBottom: 50
    },
    gambar: {
        flex: 1,
        height: null,
        width: null,
        borderRadius: 10

    },
    background: {
        flex: 1,
        height: null,
        width: null,
    }

})
