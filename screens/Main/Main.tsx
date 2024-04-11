import React from "react";
import {
    Text,
    View
} from 'react-native'
import PrenotazioneScreen from "../Prenotazione/PrenotazioneScreen";

const Stack = createNativeStackNavigator()
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../Dashboard/Dashboard";
import StanzaScreen from "../Stanza/StanzaScreen";

const Main = () => {
    return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="PrenotazioneScreen" component={PrenotazioneScreen}/>
        <Stack.Screen name="StanzaScreen" component={StanzaScreen}/>
    </Stack.Navigator>
    )
}

export default Main;