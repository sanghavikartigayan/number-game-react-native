import React, {useState} from 'react';
import { View, StyleSheet, Text, Alert, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from '../Components/Card';
import Colors from '../Constants/colors';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputChangeHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number must be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if(confirmed) {
    confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
        );
    }

return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
    <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input 
                style={styles.input}
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}  
                keyboardType='number-pad'
                maxLength={2}
                onChangeText= {inputChangeHandler}
                value={enteredValue} />           
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                </View>
                <View style={styles.button}>
                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                </View>

            </View>
        </Card>
        {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input: {
        textAlign: 'center',
        width: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen;