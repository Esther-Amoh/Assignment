import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { Card, Menu } from "react-native-paper";

const json_data = require('../Task.json');

function Next({ navigation }) {
    const [data, setData] = useState([]);

    return (
        <View style={styles.container}>
            <FlatList
                data={json_data.Task}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                    <Card 
                    onLongPress={() => {
                        Alert.alert(`Edit ${item.title}`)}}
                    style={styles.flatlist} >
                        <Text style={{ color: 'coral' }}>
                            {`${item.title}`}</Text>
                        <Text
                            style={{ opacity: 0.4 }}>{`${item.description}`}
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                opacity: 0.9,
                                color: '#b2beb5',
                            }}>{`${item.comments[0].message}`}</Text>
                    </Card>
                )}
            />
        </View>
    )

}

export default Next

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flatlist: {
        padding: 10,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
    }
})