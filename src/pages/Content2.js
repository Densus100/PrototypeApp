import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, Platform, Animated, ScrollView, StatusBar } from 'react-native';
import Wonder from '../config/Image'


let HEADER_HEIGHT = Platform.OS == 'ios' ? 115 : 70 + StatusBar.currentHeight
if (Platform.OS == 'web') {
    HEADER_HEIGHT = 95

}

const HEADER_MIN_HEIGHT = HEADER_HEIGHT;
const HEADER_MAX_HEIGHT = 200;

export default class Content2 extends Component {


    UNSAFE_componentWillMount() {
        for (var i = 1; i <= 75; i++) {
            this.array.push(i);
        }
    }

    constructor(props) {
        super(props)
        this.scrollYAnimatedValue = new Animated.Value(0);

        this.array = [];
        this.state = {

        }
    }
    render() {

        const headerBackgroundColor = this.scrollYAnimatedValue.interpolate(
            {
                inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
                outputRange: ['transparent', '#1DA1F2'],
                extrapolate: 'clamp'
            });

        return (
            <View style={styles.container} >


                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }],
                        { useNativeDriver: false }
                    )}>

                    <View style={styles.contoh} >
                        <Image style={styles.gambar} source={Wonder.image[2]} ></Image>
                    </View>

                    <View style={styles.titleContainer} >
                        <Text style={styles.title}>Title</Text>
                    </View>

                    <View style={styles.containerDesc}>
                        <Text style={styles.desc}>{'\t'} lalalalalalalla </Text>
                    </View>


                </ScrollView>

                <Animated.View style={[styles.animatedHeaderContainer, { height: HEADER_HEIGHT, backgroundColor: headerBackgroundColor }]}>
                    <Text style={styles.headerText}>Animated Header</Text>
                </Animated.View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contoh: {
        height: 300,

    },
    gambar: {
        flex: 1,
        height: null,
        width: null,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'white',
    },
    animatedHeaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 25,
        paddingTop: 35,
        paddingBottom: 5,
        zIndex: 1000,
        elevation: 1000,
    },
    headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#ff9e80',
        margin: 8,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        color: 'black',
        fontSize: 16
    },
    titleContainer: {
        backgroundColor: 'white',
        margin: 15,
        marginBottom: 5,
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc: {
        fontSize: 20,
        letterSpacing: 0.5,
        lineHeight: 25,
    },
    containerDesc: {
        backgroundColor: 'white',
        margin: 15,
        marginTop: 5,
        height: 2000,
    }
})
