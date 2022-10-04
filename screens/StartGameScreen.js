import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../utils/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

export default function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        onPickNumber(chosenNumber);
    }

    const marginTop = height < 380 ? 30 : 100

    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTop }]}>
                    <Title>Guess My Number</Title>
                    <Card style={styles.inputContainer}>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>

                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
})