import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import Header from "../Header";
import AddTodo from "../AddTodo";
import { Card, Menu } from "react-native-paper";
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Next from '../menu/Next'
import Go from "./components/menu/Go";
import Last from "./components/menu/Last"; */

const json_data = require('../taskCategory.json');

export default function Home({ navigation }) {


  const [data, setData] = useState([])

  const isPressed = () => {
    Alert.alert(`${item.name}`)
  }

  const pressHandler = (/*key*/id) => {
     /*setTodos*/setData((/*prevTodos*/prevData) => {
    return prevData.filter(/*todo*/id => /*todo.key != key*/ data.id != id);
    //<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  })
  }

  const submitHandler = (/*text*/ name) => {

    if (name.length > 3) {
      setData((prevData) => {
        return [
          { name: name, id: Math.random().toString() },
          ...prevData
        ]
      })
    }
    else {
      Alert.alert('ooops!', 'Category must be 4 characters long', [
        { name: 'Ok', onPress: () => console.log('alert closed') }
      ])
    }
  }

  return (


    <View style={styles.container}>
      {/*header*/}
      <Header />
      <View style={styles.content}>
        {/* to do */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>

          <FlatList

            data={json_data.taskCategroy}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <Card
                style={styles.flatlist}
                onPress={() => {
                  console.log(`${item.name}`)
                  if ( `${item.name}` === 'Learn') {
                    return navigation.navigate ('Next')
                  } else if (`${item.name}` === 'Recipe') {
                    return navigation.navigate ('Go')
                  }
                  else if (`${item.name}` === 'App') {
                    return navigation.navigate ('Last')
                  } else return false
                }}>
                <Text style={{ color: 'coral' }}>
                  {`${item.name}`}
                </Text>
              </Card>
            )}
          />
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },

  list: {
    flex: 1,
    marginTop: 40,
  },
  flatlist: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})