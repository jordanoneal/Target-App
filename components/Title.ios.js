import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Colors from '../utils/colors'

export default function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: '#fff',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})