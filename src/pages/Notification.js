import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Notification extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Text> Notification </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
