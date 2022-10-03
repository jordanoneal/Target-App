import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/colors'

export default function Card({ children }) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center'
    },

})