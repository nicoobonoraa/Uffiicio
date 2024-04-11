import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../../types/person";
import {  createMe } from "../../../redux/reducers/reducers";
import { me } from "../../../data/me";
import { IRootState } from "../../../redux/store/store";


const ConfermaPrenotazioneButton = (props : any) => {
    const {selectedStanza, oraIn, oraOut} = props
    const dispatch = useDispatch()

    let self = me
    self = useSelector((state: IRootState) => state.peopleReducer.self)

    const handleAddPerson = (person: Person) => {
        console.log("selectedStanza: " + selectedStanza)
        person.oraArrivo= oraIn.toISOString(),
        person.oraUscita= oraOut.toISOString(),
        person.stanza= selectedStanza
        // console.log(person.oraArrivo)
        // console.log(oraIn)
        // console.log(person)
        dispatch(createMe({
            name: person.name,
            oraArrivo: oraIn.toISOString(),
            oraUscita: oraOut.toISOString(),
            key: person.key,
            profilePic: person.profilePic,
            stanza: selectedStanza
        }))
        // console.log(self)
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