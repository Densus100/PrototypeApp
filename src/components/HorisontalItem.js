import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Wonder from '../config/Image'


const HorisontalItem = ({ items, navigation }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} >
            {

                items.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.item} onPress={() => { navigation.navigate('Content', { id: item.id, item: item }) }}>
                        <Image style={styles.image} source={Wonder.image[item.id]} />
                        <View style={styles.textView}>
                            <Text style={styles.itemTitle}> {item.title}</Text>
                            <Text numberOfLines={1} style={styles.itemDescription}>Period January 2021</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView >
    )
}

export default HorisontalItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        height: 150,
        width: 200,
        borderRadius: 10
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
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        left: 0,
        marginLeft: -10
    },
    itemDescription: {
        color: 'black',
        fontSize: 12,
        marginLeft: -5,
    }

})
