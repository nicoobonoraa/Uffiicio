import React from "react";
import {FlatList, Text, View} from 'react-native';
import ProfileImageComponent from "../../components/atoms/profileimg/ProfileImageComponent";
import StanzaComponent from "../../components/molecules/stanzaComponent/StanzaComponent";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store/store";
import PrenotaButtonComponent from "../../components/molecules/prenotaButtonComponent/PrenotaButtonComponent";
import { screenStyles } from "../screenStyles/screenStyles";
import { dashStyles } from "./DashboardStyle";
import PersonInfosComponent from "../../components/atoms/PersonInfosComponent/PersonInfosComponent";
const Dashboard = () => {

    // const numOfPeople = useSelector((state: IRootState) => state.peopleReducer.nPeople)
    // const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)

    const peopleList = useSelector((state: IRootState) => state.peopleReducer.peopleList)
    const prenotazioniList = useSelector((state: IRootState) => state.peopleReducer.prenotazioneList)
    const stanzeList = useSelector((state: IRootState) => state.peopleReducer.stanzeList)

    
    return (
        <View style={[screenStyles.wrapper]}>

            {/* Header */}
            <View style={dashStyles.header}>
                <View style={dashStyles.dot}></View>
                <Text style={[screenStyles.text, dashStyles.peopleText, {flex: 1}]}>{peopleList.length}/20</Text>
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