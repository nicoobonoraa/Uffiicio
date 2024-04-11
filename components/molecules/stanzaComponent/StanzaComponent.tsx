import React, { useDebugValue, useEffect, useState } from "react";
import {FlatList, Text, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from "../../../redux/store/store";
import ProfileImageComponent from "../../atoms/profileimg/ProfileImageComponent";
import { PeopleState, setSelectedRoom } from "../../../redux/reducers/reducers";
import { TouchableOpacity } from "react-native";
import {v4 as uuidv4} from 'uuid'
import { NavigationProp, useNavigation } from "@react-navigation/native";

const StanzaComponent = (props : any) => {

    const { stanzaId, stanzaNome, shouldNavigate } = props 
    const navigation : NavigationProp<any, any> = useNavigation();
    // const people = peopleReducer
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList).filter(person => person.stanza === stanzaId)
    const dispatch = useDispatch()
    // console.log(stanzaId)
    // console.log(people)
    return (
        <TouchableOpacity
        onPress = {() => {
            dispatch(setSelectedRoom(stanzaId))
            shouldNavigate && navigation.navigate('StanzaScreen')
        }}>
            <View>
                <FlatList
                data={people}
                // extraData={people}
                renderItem={({item}) => <ProfileImageComponent key={people.indexOf(item)} src={item.profilePic} isInOffice={item.isInOffice}></ProfileImageComponent>}></FlatList>
            </View>
        </TouchableOpacity>
    )
}

export default StanzaComponent;