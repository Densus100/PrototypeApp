import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import Wonder from '../config/Image'
import Background from '../config/Background'


const HorisontalSlider = ({ items, navigation }) => {
    return (
        <>
            <Text style={styles.title}>Indonesia Tourist Progression</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} >

                {
                    items.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.item} onPress={() => { navigation.navigate('Content2', { id: item.id, item: item }) }}>
                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={Background.image[1]} style={styles.background}>
                                <Image style={styles.image} source={Wonder.image[item.id]} />
                                <View style={styles.textView}>
                                    <Text style={styles.itemTitle}> {item.title}</Text>
                                    <Text numberOfLines={1} style={styles.itemDescription}>Period January 2021</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    ))
                }
            </ScrollView >
        </>
    )
}

export default HorisontalSlider

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        height: 150,
        width: 200,
        borderRadius: 10,
        marginTop: 10,
    },
    item: {
        marginHorizontal: 5,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingBottom: 10,
    },
    textView: {
        textAlign: 'left',
        bottom: 0,
        padding: 5,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        left: 0,
        marginLeft: -10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
        marginTop: 20,
        marginLeft: 20,
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        marginLeft: -5,
    },
    background: {
        flex: 1,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
    }

})
