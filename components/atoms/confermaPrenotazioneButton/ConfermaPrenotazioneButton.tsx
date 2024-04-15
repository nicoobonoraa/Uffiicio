import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../../types/person";
import { IRootState } from "../../../redux/store/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Prenotazione } from "../../../types/Prenotazione";
import { confermaPrenotazioneStyles } from "./confermaPrenotazioneStyle";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { createPrenotazione } from "../../../redux/thunks/thunks";
import { prenotaButtonStyles } from "../../molecules/prenotaButtonComponent/prenotaButtonStyles";



const ConfermaPrenotazioneButton = (props : any) => {
    const {oraIn, oraOut} = props
    // const dispatch = useDispatch();
    const thunkDispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const navigation : NavigationProp<any, any> = useNavigation();

    const selectedRoom = useSelector((state: IRootState) => state.peopleReducer.selectedRoom)

    const prenotazione : Prenotazione = {
        id: useSelector((state: IRootState) => state.peopleReducer.peopleList.length + 1),
        oraArrivo: new Date(oraIn).toISOString(),
        oraUscita: new Date(oraOut).toISOString(),
        isInOffice: false,
        stanza: selectedRoom,
        persona: 5
    }

    const handleAddPerson = () => {
        thunkDispatch(
            createPrenotazione(prenotazione))
        // console.log(self)
    };

    return (
        <View style={{flex: 1}}>
            <TouchableOpacity
            style={[prenotaButtonStyles.buttonContainer]}
            onPress={ () => {
                    handleAddPerson()
                    navigation.navigate('Dashboard')
                }
            }>
                <View style={prenotaButtonStyles.button}>
                    <Text style={prenotaButtonStyles.buttonText}>Conferma Prenotazione</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ConfermaPrenotazioneButton