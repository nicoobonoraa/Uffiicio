import React, { useDebugValue, useEffect, useState } from "react";
import {FlatList, Text, View} from 'react-native'
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
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList).filter(person => person.stanza === stanzaId)
    const dispatch = useDispatch()
    console.log(stanzaId)
    return (
        <TouchableOpacity
        onPress = {() => {
            dispatch(setSelectedRoom(stanzaId))
        }}>
            <View>
                <FlatList
                data={people}
                renderItem={({item}) => <ProfileImageComponent key={people.indexOf(item)} src={item.profilePic}></ProfileImageComponent>}></FlatList>
            </View>
        </TouchableOpacity>
    )
}

export default StanzaComponent;