import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Pressable, SectionList, Image, Platform} from 'react-native'
import StanzaComponent from '../../components/molecules/stanzaComponent/StanzaComponent';
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import PrenotaButtonComponent from '../../components/molecules/prenotaButtonComponent/PrenotaButtonComponent';
import ConfermaPrenotazioneButton from '../../components/atoms/confermaPrenotazioneButton/ConfermaPrenotazioneButton';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store/store';
import { FlatList } from 'react-native';
import { screenStyles } from '../screenStyles/screenStyles';
import { State } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { prenotazioneScreenStyles } from './PrenotazioneScreen';
import Person from '../../types/person';
import ProfileImageComponent from '../../components/atoms/profileimg/ProfileImageComponent';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const PrenotazioneScreen = () => {

    const stanzeArray = useSelector((state: IRootState) => state.peopleReducer.stanzeList)
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList)
    const me : Person = people.filter(person => person.id == 5)[0]
    
    const [dateIn, setDateIn] = useState(new Date(1598051730000));
    const [dateOut, setDateOut] = useState(new Date(1598051730000));
    const [showIn, setShowIn] = useState(false)
    const [showOut, setShowOut] = useState(false)

    const navigation : NavigationProp<any, any>= useNavigation()

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
    const handleConfirmIn = (date : any) => {
        setDateIn(date)
        setShowIn(false)
    }
    const handleConfirmOut = (date : any) => {
        setDateOut(date)
        setShowOut(false)
    }

    return (
        <View style={screenStyles.wrapper}>


            {/* Header */}
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 27}}>
                <Pressable
                onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" size={20} color="white" style={{marginRight: 33}} />            
                </Pressable>
                <Text style={screenStyles.semiBoldTitle}>PrenotazioneScreen</Text>
            </View>

            {/* Logged User Profile Infos */}
            
            <View style={[prenotazioneScreenStyles.loggedInUserInfos, {marginBottom: 40, marginTop: 10}]}>
                <ProfileImageComponent person={me} isInOffice={true}></ProfileImageComponent>
                <Text style={[screenStyles.text, {fontSize: 16}]}>{me.name}</Text>
            </View>

            {/* Form */}
            <View style={{marginBottom: 40}}>
                <Text style={[screenStyles.semiBoldTitle, {marginBottom: 12}]}>Selezione Stanza</Text>
                <FlatList
                style={prenotazioneScreenStyles.stanzeList}
                horizontal
                data={stanzeArray}
                renderItem={({item}) => 
                    <StanzaComponent stanzaId={item.id} width={100}></StanzaComponent>
                }
                />
            </View>

            {Platform.OS == 'ios' &&
                <DateTimePickerModal
                    isVisible={showIn}
                    mode="time"
                    onConfirm={handleConfirmIn}
                    onCancel={() => setShowIn(false)}
                />
            }

            {Platform.OS == 'ios' &&
                <DateTimePickerModal
                    isVisible={showOut}
                    mode="time"
                    onConfirm={handleConfirmOut}
                    onCancel={() => setShowOut(false)}
                />
            }


            {(showIn && Platform.OS == 'android') && 
            <DateTimePicker
                testID="dateTimePicker"
                value={dateIn}
                mode={'time'}
                is24Hour={true}
                onChange={onChangeIn}
                />
                
            }

            {(showOut && Platform.OS == 'android') && 
            <DateTimePicker
                testID="dateTimePicker"
                value={dateOut}
                mode={'time'}
                is24Hour={true}
                onChange={onChangeOut}
                />
            }
            <Text style={[screenStyles.semiBoldTitle, {marginBottom: 12}]}>Seleziona Orario</Text>
            <View style={prenotazioneScreenStyles.orarioFormContainer}>

                <View>
                    <Text style={prenotazioneScreenStyles.smallTexts}>Inizio</Text>
                    <Pressable 
                    style={prenotazioneScreenStyles.orarioIndicato}
                    onPress={() => {
                        setShowIn(true)
                    }}>
                        <Text style={screenStyles.text}>{dateIn.getHours()}:{dateIn.getMinutes()}</Text>
                    </Pressable>
                </View>

                {/* Separatore */}
                <View style={{flex: 1}}>
                    <View style={{height: 1.5, backgroundColor: 'white', marginTop: 20, marginHorizontal: 10}} />
                    <Icon name="angle-right" size={20} color="white" style={{ position: 'absolute',
                        right: 9, marginTop: 10
                    }} />            
                </View>

                <View>
                    <Text style={prenotazioneScreenStyles.smallTexts}>Fine</Text>
                    <Pressable 
                    style={prenotazioneScreenStyles.orarioIndicato}
                    onPress={() => {
                        setShowOut(true)
                    }}>
                        <Text style={screenStyles.text}>{dateOut.getHours()}:{dateOut.getMinutes()}</Text>
                    </Pressable>
                </View>
            </View>
        
            {/* Button */}
            <ConfermaPrenotazioneButton selectedStanza={selectedStanza} oraIn={dateIn} oraOut={dateOut}></ConfermaPrenotazioneButton>
        </View>
    )
}


export default PrenotazioneScreen;