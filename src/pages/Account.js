import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform, StatusBar, } from 'react-native'
import HeaderHome from '../components/HeaderHome'
import Animated from 'react-native-reanimated'


let HEADER_HEIGHT = Platform.OS == 'ios' ? 115 : 70 + StatusBar.currentHeight
if (Platform.OS == 'web') {
    HEADER_HEIGHT = 95

}

export default class Account extends Component {

    render() {
        const scrollY = new Animated.Value(0)
        const diffClamScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT)
        const headerY = Animated.interpolate(diffClamScrollY, {
            inputRange: [0, HEADER_HEIGHT],
            outputRange: [0, -HEADER_HEIGHT]
        })
        return (
            <>
                <HeaderHome {...this.props} user="Candidate Name" headerHeight={HEADER_HEIGHT} headerY={headerY} ></HeaderHome>

                <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Text> Account </Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({})
