import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, } from "react-native";
import Header from './components/Header'
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { Card } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Next from "./components/menu/Next";
import Go from "./components/menu/Go";
import Last from "./components/menu/Last";
import Home from "./components/menu/Home";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name='Next' component={Next} options={{ title: 'Overview' }} />
      <Stack.Screen name='Go' component={Go} />
      <Stack.Screen name='Last' component={Last} />
    </Stack.Navigator>

  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>)
}


