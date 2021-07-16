import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Wonder from '../config/Image'

const { width, height } = Dimensions.get('window')

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.splashScreen}>
            <Image style={styles.image} source={Wonder.image[0]} />
            <Text>V.0.1.0</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    splashScreen: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }, image: {
        width: 230,
        height: 230,
        borderRadius: 10
    },
})
