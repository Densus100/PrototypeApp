import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Wonder from '../config/Image'


const { width, height } = Dimensions.get('window')

export default function CarouselItem({ item, navigation, id }) {
    return (
        <View style={styles.cardView}>
            <TouchableOpacity onPress={() => { navigation.navigate('Content', { id: item.id, item: item }) }}>
                <Image style={styles.image} source={Wonder.image[item.id]} />
                <View style={styles.textView}>
                    <Text style={styles.itemTitle}> {item.title}</Text>
                    <Text numberOfLines={2} style={styles.itemDescription}>{item.desc}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        textAlign: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        bottom: 0,
        padding: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0,
        shadowRadius: 3,
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        marginLeft: 6,

        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0,
        shadowRadius: 3,
        elevation: 5
    }
})
