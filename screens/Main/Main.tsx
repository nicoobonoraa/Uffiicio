import React from "react";
import {
    Text,
    View
} from 'react-native'

const Stack = createNativeStackNavigator()
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../Dashboard/Dashboard";

const Main = () => {
    return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
    )
}

export default Main;