import React from "react";
import {Text, View} from 'react-native';
import ProfileImageComponent from "../../components/atoms/profileimg/ProfileImageComponent";
import StanzaComponent from "../../components/molecules/stanzaComponent/StanzaComponent";
import { useSelector } from "react-redux";
import { PeopleState } from "../../redux/reducers/reducers";
import { IRootState } from "../../redux/store/store";

const Dashboard = () => {

    const numOfPeople = useSelector((state: IRootState) => state.peopleReducer.nPeople)

    return (
        <View>

            {/* Header */}
            <View>
                <View></View>
                <Text>{numOfPeople}/20</Text>
                <Text>Enhancers Office</Text>
            </View>

            {/* Stanze */}
            <View>
                <StanzaComponent stanzaId={1}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
                <StanzaComponent stanzaId={3}></ StanzaComponent>
                <StanzaComponent stanzaId={4}></StanzaComponent>
            </View>

            
        </View>
    )
}

export default Dashboard