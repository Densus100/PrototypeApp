import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function TabItem({ isFocused, onPress, onLongPress, label }) {
    const icon = () => {
        if (label == "Home")
            return isFocused ? (<Icon name='home' size={25} color={'#008b8b'}></Icon>) : (<Icon name='home' size={25} color={'gray'}></Icon>)
        if (label == "Team")
            return isFocused ? (<Icon name='sitemap' size={25} color={'#008b8b'}></Icon>) : (<Icon name='sitemap' size={25} color={'gray'}></Icon>)
        if (label == "Account")
            return isFocused ? (<Icon name='account' size={25} color={'#008b8b'}></Icon>) : (<Icon name='account' size={25} color={'gray'}></Icon>)


        return (<Icon name='home' size={25} color={'#008b8b'}></Icon>)

    }

    const hiding = () => {
        if (label == "Content") {
            return (null)
        } else {
            return (
                <TouchableOpacity
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={styles.item}
                >

                    <View style={shadow()}>
                        {icon()}
                        {textLabel()}
                    </View>



                </TouchableOpacity>
            )
        }


    }

    const textLabel = () => {
        if (isFocused) {
            return (
                <Text style={styles.textFocused}>
                    {label}
                </Text>
            )

        } else {
            return (
                <Text style={styles.textNotFocused}>
                    {label}
                </Text>
            )
        }
    }

    const shadow = () => {
        if (isFocused) {
            return (
                styles.shadowFocused
            )

        } else {
            return (
                styles.shadowNotFocused
            )
        }
    }
    return (
        hiding()

    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5

    },
    shadowFocused: {
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingVertical: 5,
        backgroundColor: '#ebebeb'
    },
    shadowNotFocused: {
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingVertical: 5,
        backgroundColor: 'white'
    },
    textFocused: {
        color: '#008b8b',
        fontWeight: 'bold',
        marginLeft: 8
    },
    textNotFocused: {
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: 8

    }

})
