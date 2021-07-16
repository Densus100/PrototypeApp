import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


var hours = new Date().getHours();

function greetings(hours) {
    if (hours > 3 && hours <= 11) {
        return ("Good Morning,")
    } else if (hours > 11 && hours <= 18) {
        return ("Good Afternoon,")
    } else if (hours > 18 || hours < 3) {
        return ("Good Night,")
    }
}

export default function HeaderHome({ id, headerHeight, headerY, user, navigation }) {
    // const HEADER_HEIGHT = headerHeight
    return (
        <Animated.View style={[styles.header, {
            height: headerHeight,
            transform: [{
                translateY: headerY
            }]
        }]}>
            <View>
                <Text style={styles.greet}>{greetings(hours)}</Text>
                <Text style={styles.username}>{user}</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Notification') }}>
                <Icon name='bell-outline' size={25} color={'black'}></Icon>
            </TouchableOpacity>

        </Animated.View>
    )
}


const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'white',
        zIndex: 1000,
        elevation: 1000,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 25,
        paddingTop: 35,
        paddingBottom: 5
    },
    greet: {
        fontSize: 12,
        color: 'gray'
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
})
