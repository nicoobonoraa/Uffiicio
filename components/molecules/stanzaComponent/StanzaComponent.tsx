import React, { useDebugValue, useEffect, useState } from "react";
import {FlatList, Text, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from "../../../redux/store/store";
import ProfileImageComponent from "../../atoms/profileimg/ProfileImageComponent";
import { PeopleState, setSelectedRoom } from "../../../redux/reducers/reducers";
import { TouchableOpacity } from "react-native";
import {v4 as uuidv4} from 'uuid'
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { stanzaStyles } from "./StanzaComponentStyles";

const StanzaComponent = (props : any) => {

    const { stanzaId, stanzaNome, shouldNavigate, isLeftColumn } = props 
    const navigation : NavigationProp<any, any> = useNavigation();
    // const people = peopleReducer
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList).filter(person => person.stanza === stanzaId)
    const dispatch = useDispatch()
    // console.log(stanzaId)
    // console.log(people)
    return (
        <TouchableOpacity style={{flex: 1}}
        onPress = {() => {
            dispatch(setSelectedRoom(stanzaId))
            shouldNavigate && navigation.navigate('StanzaScreen')
        }}>
            <View style={[stanzaStyles.stanza, isLeftColumn && {marginRight: 14}]}>
                <FlatList
                data={people}
                horizontal
                style={stanzaStyles.listOfPeople}
                renderItem={({item}) => <ProfileImageComponent key={people.indexOf(item)} src={item.profilePic} isInOffice={item.isInOffice} isLeftColumna={people} isLeftColumn={isLeftColumn}></ProfileImageComponent>}></FlatList>
            </View>
        </TouchableOpacity>
    )
}

export default StanzaComponent;