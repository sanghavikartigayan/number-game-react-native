import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import Card from '../Components/Card';
import Colors from '../Constants/colors';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.cardContainer}>
                <Text style={styles.title}>The Game is Over!</Text>
                <Text style={styles.subtitle}>Number of Rounds: {props.rounds}</Text>
                <Text style={styles.subtitle}>The Number was: {props.userNumber}</Text>
                <View style={styles.button}>
                    <Button title="NEW GAME" color={Colors.accent} onPress={props.onRestart}/>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        padding: 30,
        width: 300,
        maxWidth: '80%'
    },
    button: {
        marginVertical: 20
    },
    title: {
        color: Colors.primary,
        fontSize: 22,
        paddingBottom: 20
    },
    subtitle: {
        fontSize: 16.5
    }
})

export default GameOver;