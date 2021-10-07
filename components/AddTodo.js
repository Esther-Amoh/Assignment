

import React, { useState} from "react";
import { Text, TextInput, View, Button, StyleSheet, } from "react-native";

export default function AddTodo({ submitHandler }){
const [data, /*setText*/setData] = useState("");

    const changeHandler = (val) => {
        setData(val);

    }

    return(
        <View>
            <TextInput style={styles.input}
              placeholder="New ..."
              onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(data)} title='new category' color="coral"/>
        </View>
    )  

}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})
 