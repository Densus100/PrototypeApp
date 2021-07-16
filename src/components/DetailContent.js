import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const WINDOW_WIDTH = Dimensions.get('window').width

export default function DetailContent({ title, desc, link }) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <TouchableOpacity style={styles.icon}>
                <Icon name='chevron-right-circle-outline' size={20} color={'black'}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
        marginLeft: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    icon: {

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    desc: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: WINDOW_WIDTH / 2
    }
})
