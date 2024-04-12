import React from "react";
import {FlatList, Text, View} from 'react-native';
import ProfileImageComponent from "../../components/atoms/profileimg/ProfileImageComponent";
import StanzaComponent from "../../components/molecules/stanzaComponent/StanzaComponent";
import { useSelector } from "react-redux";
import { PeopleState } from "../../redux/reducers/reducers";
import { IRootState } from "../../redux/store/store";
import PrenotaButtonComponent from "../../components/molecules/prenotaButtonComponent/PrenotaButtonComponent";
import { screenStyles } from "../screenStyles/screenStyles";
import { dashStyles } from "./DashboardStyle";
import PersonInfosComponent from "../../components/atoms/PersonInfosComponent/PersonInfosComponent";
const Dashboard = () => {

    const numOfPeople = useSelector((state: IRootState) => state.peopleReducer.nPeople)
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)

    return (
        <View style={[screenStyles.wrapper]}>

            {/* Header */}
            <View style={dashStyles.header}>
                <View style={dashStyles.dot}></View>
                <Text style={[screenStyles.text, dashStyles.peopleText, {flex: 1}]}>{numOfPeople}/20</Text>
                <Text style={[screenStyles.text, screenStyles.semiBoldTitle]}>Enhancers Office</Text>
            </View>

            {/* Stanze */}
            <View style={dashStyles.stanzeContainer}>
                <View style={[dashStyles.innerStanzeContainer, dashStyles.upStanzaContainer]}>
                    <StanzaComponent stanzaId={1} shouldNavigate={true} isLeftColumn={true}></StanzaComponent>
                    <StanzaComponent stanzaId={2} shouldNavigate={true}></StanzaComponent>
                </View>
                <View style={dashStyles.innerStanzeContainer}>
                    <StanzaComponent stanzaId={3} shouldNavigate={true} isLeftColumn={true}></ StanzaComponent>
                    <StanzaComponent stanzaId={4} shouldNavigate={true}></StanzaComponent>
                </View>
            </View>

            {/* Persone in ufficio */}
            {/* <View>
                <Text style={[screenStyles.text, screenStyles.semiBoldTitle, {marginTop: 20}]}>Persone in ufficio</Text>
                <FlatList
                data={people}
                renderItem={({item}) => 
                    <PersonInfosComponent person={item}/>
                }>
                    
                </FlatList>
            </View> */}


            {/* Button */}
            <PrenotaButtonComponent pageToNavigate={"PrenotazioneScreen"}></PrenotaButtonComponent>

        </View>
    )
}

export default Dashboard