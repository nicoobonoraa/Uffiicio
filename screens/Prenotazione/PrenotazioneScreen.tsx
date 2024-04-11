import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Pressable} from 'react-native'
import StanzaComponent from '../../components/molecules/stanzaComponent/StanzaComponent';
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import PrenotaButtonComponent from '../../components/molecules/prenotaButtonComponent/PrenotaButtonComponent';
import ConfermaPrenotazioneButton from '../../components/atoms/confermaPrenotazioneButton/ConfermaPrenotazioneButton';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store/store';

const PrenotazioneScreen = () => {



    const [dateIn, setDateIn] = useState(new Date(1598051730000));
    const [dateOut, setDateOut] = useState(new Date(1598051730000));
    const [showIn, setShowIn] = useState(false)
    const [showOut, setShowOut] = useState(false)

    const selectedStanza = useSelector((state: IRootState) => state.peopleReducer.selectedRoom)

    const onChangeIn = (event : DateTimePickerEvent, selectedDate : Date | null | any | undefined) => {
        console.log("changed")
        const currentDate = selectedDate;
        setDateIn(currentDate);
        setShowIn(false)
    };
    const onChangeOut = (event : DateTimePickerEvent, selectedDate : Date | null | any | undefined) => {
        console.log("changed")
        const currentDate = selectedDate;
        setDateOut(currentDate);
        setShowOut(false)
    };

    return (
        <View>
            <Text>
                PrenotazioneScreen
            </Text>

            {/* Form */}
            <ScrollView
                horizontal>
                <StanzaComponent stanzaId={1}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
                <StanzaComponent stanzaId={2}></StanzaComponent>
            </ScrollView>

            {showIn && 
            <DateTimePicker
                testID="dateTimePicker"
                value={dateIn}
                mode={'time'}
                is24Hour={true}
                onChange={onChangeIn}
                />
            }

            {showOut && 
            <DateTimePicker
                testID="dateTimePicker"
                value={dateOut}
                mode={'time'}
                is24Hour={true}
                onChange={onChangeOut}
                />
            }

            <Pressable onPress={() => {
                setShowIn(true)
            }}>
                <Text>Seleziona ora ingresso</Text>
            </Pressable>

            <Pressable onPress={() => {
                setShowOut(true)
            }}>
                <Text>Seleziona ora ingresso</Text>
            </Pressable>
        
            {/* Button */}
            <ConfermaPrenotazioneButton selectedStanza={selectedStanza} oraIn={dateIn} oraOut={dateOut}></ConfermaPrenotazioneButton>
        </View>
    )
}


export default PrenotazioneScreen;