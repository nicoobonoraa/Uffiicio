import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store/store";
import Person from "../../../types/person";
import { personInfoStyles } from "./PersonInfoComponents";
import { colors } from "../../../defaultStyles/colors";
import { screenStyles } from "../../../screens/screenStyles/screenStyles";
import moment from 'moment';

const PersonInfosComponent = (props : any) => {
    
    const {prenotazione}  = props
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)
    const person : Person = people.filter(p => p.id == prenotazione.persona)[0]


    const convertToMoment = (date: Date) => {
        return moment(date)
    }

    return (
        <View style={personInfoStyles.wrapper}>
            <View>
            <View style={[personInfoStyles.dot,
                        prenotazione.isInOffice 
                        ?{backgroundColor: colors.green100}
                        :{backgroundColor: colors.orange100}]}></View>
                <Image
                style={{marginRight: 15, borderRadius: 7}}
                    source={{
                        uri: person.profilePic
                    }}
                    width={32}
                    height={32}
                />
            </View>
            <Text style={screenStyles.text}>{person.name}</Text>
            <View  style={personInfoStyles.date}>
                <Text style={screenStyles.text}>{convertToMoment(prenotazione.oraArrivo).format('HH:mm')}</Text>
                <Text style={{color: 'white'}}> - </Text>
                <Text style={screenStyles.text}>{convertToMoment(prenotazione.oraUscita).format('HH:mm')}</Text>
            </View>
        </View>
    )
}

export default PersonInfosComponent