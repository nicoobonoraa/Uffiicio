import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Person from "../../../types/person";
import { addPerson } from "../../../redux/reducers/reducers";
import { me } from "../../../data/me";


const ConfermaPrenotazioneButton = () => {
    const dispatch = useDispatch()

    const handleAddPerson = (person: Person) => {
        dispatch(addPerson(person));
    };

    return (
        <TouchableOpacity
        onPress={ () => {
                handleAddPerson(me)
            }
        }>
            <Text>Conferma Prenotazione</Text>
            <Text>V</Text>
        </TouchableOpacity>
    )
}

export default ConfermaPrenotazioneButton