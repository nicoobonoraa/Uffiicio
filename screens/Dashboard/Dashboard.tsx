import React, { useEffect } from "react";
import {FlatList, Platform, Text, View} from 'react-native';
import ProfileImageComponent from "../../components/atoms/profileimg/ProfileImageComponent";
import StanzaComponent from "../../components/molecules/stanzaComponent/StanzaComponent";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store/store";
import PrenotaButtonComponent from "../../components/molecules/prenotaButtonComponent/PrenotaButtonComponent";
import { screenStyles } from "../screenStyles/screenStyles";
import { dashStyles } from "./DashboardStyle";
import PersonInfosComponent from "../../components/atoms/PersonInfosComponent/PersonInfosComponent";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchPrenotazioni, fetchStanze } from "../../redux/thunks/thunks";
const Dashboard = () => {

    // const numOfPeople = useSelector((state: IRootState) => state.peopleReducer.nPeople)
    // const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)

    const peopleList = useSelector((state: IRootState) => state.peopleReducer.peopleList)
    const prenotazioniList = useSelector((state: IRootState) => state.peopleReducer.prenotazioneList)
    const stanzeList = useSelector((state: IRootState) => state.peopleReducer.stanzeList)

    const thunkDispatch = useDispatch<ThunkDispatch<IRootState, any,any>>()
  
    useEffect(() => {
      thunkDispatch(fetchPrenotazioni()).then(() => {
        thunkDispatch(fetchStanze())
      })
    }, [])
    // const peopleInUfficio = prenotazioniList.filter(prenotazione => prenotazione.stanza).length

    const isPrenotato = useSelector((state: IRootState) => state.peopleReducer.isPrenotazioneEffettuata)

    return (
        <View style={[screenStyles.wrapper, Platform.OS == 'ios' && {paddingTop: 60}]}>

            {/* Header */}
            <View style={dashStyles.header}>
                <View style={dashStyles.dot}></View>
                <Text style={[screenStyles.text, dashStyles.peopleText, {flex: 1}]}>{prenotazioniList.length}/20</Text>
                <Text style={[screenStyles.text, screenStyles.semiBoldTitle]}>Enhancers Office</Text>
            </View>

            {/* Stanze */}
            <View style={dashStyles.stanzeContainer}>
                <FlatList
                data={stanzeList}
                numColumns={2}
                renderItem={({item}) => <StanzaComponent stanzaId={item.id} shouldNavigate={true}/>}></FlatList>
            </View>

            {/* Persone in ufficio */}
            <View>
                <Text style={[screenStyles.text, screenStyles.semiBoldTitle, {marginTop: 20, marginBottom: 12}]}>Persone in ufficio</Text>
                <FlatList
                scrollEnabled
                style={isPrenotato && {height: 200}}
                data={prenotazioniList.filter(prenotazione => prenotazione.isInOffice==true)}
                renderItem={({item}) =>
                    <PersonInfosComponent prenotazione={item}/>
                }>

                </FlatList>
            </View>


            {/* Button */}
            <PrenotaButtonComponent pageToNavigate={"PrenotazioneScreen"}></PrenotaButtonComponent>

        </View>
    )
}

export default Dashboard