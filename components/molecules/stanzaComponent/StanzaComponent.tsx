import React, { useDebugValue, useEffect, useState } from "react";
import {Text, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from "../../../redux/store/store";
import ProfileImageComponent from "../../atoms/profileimg/ProfileImageComponent";
import { PeopleState } from "../../../redux/reducers/reducers";
import PrenotaButtonComponent from "../prenotaButtonComponent/prenotaButtonComponent";


const StanzaComponent = (props : any) => {

    const { stanzaId } = props 
    // const people = peopleReducer
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)

    return (
        <View>
            <Text>
                {
                people.map(person => person.stanza == stanzaId && <ProfileImageComponent key={person.name} src={person.profilePic}></ProfileImageComponent>)
                }
            </Text>
            <PrenotaButtonComponent></PrenotaButtonComponent>
        </View>
    )
}

export default StanzaComponent;