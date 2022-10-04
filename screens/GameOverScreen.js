import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Colors from '../utils/colors'
import PrimaryButton from '../components/PrimaryButton'

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')}></Image>
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: Colors.primary800,
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})