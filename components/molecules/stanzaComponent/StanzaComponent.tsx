import React, { useDebugValue, useEffect, useState } from "react";
import {Text, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from "../../../redux/store/store";
import ProfileImageComponent from "../../atoms/profileimg/ProfileImageComponent";
import { PeopleState, setSelectedRoom } from "../../../redux/reducers/reducers";
// import PrenotaButtonComponent from "../prenotaButtonComponent/prenotaButtonComponent";
import PrenotaButtonComponent from "../prenotaButtonComponent/PrenotaButtonComponent";
import { TouchableOpacity } from "react-native";
import {v4 as uuidv4} from 'uuid'

const StanzaComponent = (props : any) => {

    const { stanzaId, stanzaNome } = props 
    // const people = peopleReducer
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)
    const dispatch = useDispatch()

    return (
        <TouchableOpacity
        onPress = {() => {
            dispatch(setSelectedRoom(stanzaId))
        }}>
            <View>
                <Text>
                    {
                    people.map(person => person.stanza == stanzaId && <ProfileImageComponent key={people.indexOf(person)} src={person.profilePic}></ProfileImageComponent>)
                    }
                </Text>
            
            </View>
        </TouchableOpacity>
    )
}

export default StanzaComponent;