import React, { useDebugValue, useEffect, useState } from "react";
import {FlatList, Text, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { IRootState } from "../../../redux/store/store";
import ProfileImageComponent from "../../atoms/profileimg/ProfileImageComponent";
// import { PeopleState, setSelectedRoom } from "../../../redux/reducers/reducers";
import { TouchableOpacity } from "react-native";
import {v4 as uuidv4} from 'uuid'
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { stanzaStyles } from "./StanzaComponentStyles";
import { setSelectedRoom } from "../../../redux/reducers/reducers";

const StanzaComponent = (props : any) => {

    const { stanzaId, stanzaNome, shouldNavigate, isLeftColumn, width } = props 
    const navigation : NavigationProp<any, any> = useNavigation();
    // const people = peopleReducer
    // const people = useSelector((state: IRootState) => state.peopleReducer.peopleList).filter(person => person.stanza === stanzaId)
    const dispatch = useDispatch()
    
    const peopleList = useSelector((state: IRootState) => state.peopleReducer.peopleList)
    const prenotazioniList = useSelector((state: IRootState) => state.peopleReducer.prenotazioneList)
    const stanzeList = useSelector((state: IRootState) => state.peopleReducer.stanzeList)

    const filteredPrenotazioni = prenotazioniList.filter(prenotazione => prenotazione.stanza == stanzaId)
    // console.log(stanzaId)
    // console.log(people)
    // console.log("peopleList: ", peopleList)
    const getPersonOnPrenotazioneId = (personId: number) => {
        // console.log(personId)
        const selectedPerson = peopleList.filter(person => person.id == personId)[0]
        console.log("selected Person: ", selectedPerson)
        return selectedPerson
    }

    return (
        <TouchableOpacity style={{flex: 1}}
        onPress = {() => {
            dispatch(setSelectedRoom(stanzaId))
            shouldNavigate && navigation.navigate('StanzaScreen')
        }}>
            <View style={[stanzaStyles.stanza,  width && {marginRight: 14}, stanzaId%2==0 && {marginRight: 14}, stanzaId < 2 && {marginBottom: 12}]}>
                <Text style={{position: 'absolute', bottom: 10, left: 10, opacity: .8}}>{stanzaNome ? stanzaNome : 'Stanza'}</Text>
                <FlatList
                // key={'#'}
                // keyExtractor={item => "#" + item.id}
                data={filteredPrenotazioni}
                numColumns={3}
                style={[stanzaStyles.listOfPeople, width && {width: width}]}
                renderItem={({item}) => <ProfileImageComponent 
                key={item.id} 
                person={getPersonOnPrenotazioneId(item.persona)} 
                isInOffice={item.isInOffice} />}></FlatList>
            </View>
        </TouchableOpacity>
    )
}

export default StanzaComponent;