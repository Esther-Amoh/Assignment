import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SandBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
        backgroundColor: "#ddd"
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 10
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'purple',
        padding: 10
    }

});