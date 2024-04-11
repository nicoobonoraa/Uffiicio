import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../../types/person";
import {  createMe } from "../../../redux/reducers/reducers";
import { me } from "../../../data/me";
import { IRootState } from "../../../redux/store/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";


const ConfermaPrenotazioneButton = (props : any) => {
    const {selectedStanza, oraIn, oraOut} = props
    const dispatch = useDispatch()
    const navigation : NavigationProp<any, any> = useNavigation();

    let self = me
    self = useSelector((state: IRootState) => state.peopleReducer.self)

    const handleAddPerson = () => {
        dispatch(createMe({
            name: self.name,
            oraArrivo: oraIn.toISOString(),
            oraUscita: oraOut.toISOString(),
            key: self.key,
            profilePic: self.profilePic,
            stanza: selectedStanza
        }))
        // console.log(self)
    };

    return (
        <TouchableOpacity
        onPress={ () => {
                handleAddPerson()
                navigation.navigate('Dashboard')
            }
        }>
            <Text>Conferma Prenotazione</Text>
            <Text>V</Text>
        </TouchableOpacity>
    )
}

export default ConfermaPrenotazioneButton