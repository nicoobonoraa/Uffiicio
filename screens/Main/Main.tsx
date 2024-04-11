import React from "react";
import {
    Text,
    View
} from 'react-native'
import PrenotazioneScreen from "../Prenotazione/PrenotazioneScreen";

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
        <Stack.Screen name="PrenotazioneScreen" component={PrenotazioneScreen}/>
    </Stack.Navigator>
    )
}

export default Main;