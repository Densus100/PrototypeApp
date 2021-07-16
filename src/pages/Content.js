import React, { useRef, Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions, StatusBar, Platform } from 'react-native'
import Wonder from '../config/Image'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import TabItem from '../components/TabItem';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

const { width, heigth } = Dimensions.get('window')
const MAX_HEIGHT = 350;
let HEADER_HEIGHT = Platform.OS == 'ios' ? 115 : 65 + StatusBar.currentHeight
if (Platform.OS == 'web') {
    HEADER_HEIGHT = 70

}


const Content = (props) => {
    const navigation = useNavigation();
    const { id, item } = props.route.params;
    const navTitleView = useRef(null);

    return (
        <>
            <View style={{
                flex: 1
            }}>
                {/* <View style={{
                    zIndex: 1000,
                    elevation: 1000,
                    height: 100,
                    backgroundColor: "transparent",
                }}>

                </View> */}



                <ImageHeaderScrollView
                    maxHeight={MAX_HEIGHT}
                    minHeight={HEADER_HEIGHT}
                    fadeOutForeground
                    // headerImage={Wonder.image[id]}
                    renderHeader={() => <Image source={Wonder.image[id]} style={styles.image} />}

                    // renderForeground={() => (
                    //     // <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
                    //     //     <TouchableOpacity
                    //     //         onPress={() => console.log("tap!!")}>
                    //     //         <Text style={{
                    //     //             backgroundColor: "transparent",
                    //     //             color: 'white',
                    //     //             fontWeight: 'bold',
                    //     //             fontSize: 20,
                    //     //             marginTop: 250

                    //     //         }}>{item.title}</Text>
                    //     //     </TouchableOpacity>
                    //     // </View>
                    //     <View style={styles.titleContainer} >
                    //         <Text style={styles.imageTitle}>{item.title}</Text>
                    //     </View>
                    // )}

                    renderFixedForeground={() => (
                        <Animatable.View style={styles.navTitleView} ref={navTitleView}>
                            <Text style={styles.navTitle}>{item.title}</Text>
                        </Animatable.View>
                    )}
                >

                    {/* <TriggeringView
                            style={styles.section}
                            onHide={() => navTitleView.current.fadeInUp(200)}
                            onDisplay={() => navTitleView.current.fadeOut(100)}
                        >
                            <Text style={styles.title}>
                                <Text style={styles.name}>{item.title}</Text>
                            </Text>

                        </TriggeringView> */}


                    {/* <Image style={styles(widht, height).gambar} source={Wonder.image[id]} /> */}
                    {/* <View style={styles.contoh} >
                    <Image style={styles.gambar} source={Wonder.image[id]} />
                </View> */}
                    {/* <Text> {item.title}</Text> */}

                    <View style={{
                        backgroundColor: 'white',
                        margin: 15,
                        height: 2000,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            letterSpacing: 0.5,
                            lineHeight: 25,
                        }}>{'\t'}  {item.desc}</Text>
                    </View>
                </ImageHeaderScrollView >
            </View>
            <View
                style={{
                    backgroundColor: 'white',
                    zIndex: 1000,
                    elevation: 1000,
                    position: 'absolute',
                    bottom: 0,
                    width: width,

                    flexDirection: 'row',
                    justifyContent: "space-between",
                    paddingVertical: 8,


                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}>
                {/* <TabItem isFocused={false} onPress={() => navigation.navigate('Home')} label="Home"></TabItem>
                <TabItem isFocused={false} onPress={() => navigation.navigate('Team')} label="Team"></TabItem>
                <TabItem isFocused={false} onPress={() => navigation.navigate('Account')} label="Account"></TabItem> */}
            </View>
        </>
    )
}


export default Content

// const styles = (width, height) => StyleSheet.create({
//     gambar: {
//         flex: 1,
//         height: height,
//         borderRadius: 10
//     },

// })
const styles = StyleSheet.create({
    contoh: {
        flex: 1,
        margin: 20,
        height: 200,
    },
    gambar: {
        flex: 1,
        height: null,
        width: null,
        borderRadius: 10,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
        fontWeight: 'bold'
    },
    navTitleView: {
        height: HEADER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
        backgroundColor: 'white'
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },

    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },

})
