import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {Text, TouchableOpacity, View, Switch, Pressable} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/store/store";
import { toggleIsInUfficio } from "../../../redux/reducers/reducers";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { deletePrenotazione, rimuoviPrenotazione, toggleInUfficio } from "../../../redux/thunks/thunks";
import { screenStyles } from "../../../screens/screenStyles/screenStyles";
import { prenotaButtonStyles } from "./prenotaButtonStyles";
import { colors } from "../../../defaultStyles/colors";

const PrenotaButtonComponent = (props : any) => {
    
    const { pageToNavigate } = props
    const isPrenotaClicked = useSelector((state: IRootState) => state.peopleReducer.isPrenotazioneEffettuata)
    const isInUfficio = useSelector((state: IRootState) => state.peopleReducer.prenotazioneList).filter(prenotazione => prenotazione.persona == 5)[0]
    
    const [enabled, setEnabled] = useState(false)
    const [clickable, setClickable] = useState(true)

    useEffect(() => {
        // console.log()
        if(isInUfficio != undefined) {
            setEnabled(!!isInUfficio.isInOffice)
        }
        console.log("enabled" , enabled)
    }, [isInUfficio])


    const thunkDispatch = useDispatch<ThunkDispatch<IRootState, any,any>>()

    const navigation : NavigationProp<any, any> = useNavigation();

    const toggleSwitch = () => {
        setClickable(false)
        thunkDispatch(toggleInUfficio())
        setTimeout(() => {
                setClickable(true)
        }, 2000)
    }

    return (
        <View style={{flex: 1}}>

            {!isPrenotaClicked && 
                <Pressable
                style={prenotaButtonStyles.buttonContainer}
                onPress={(pressed) => {
                    pageToNavigate && navigation.navigate(pageToNavigate)
                }}>
                    <View style = {[{margin: 0}, prenotaButtonStyles.button]}>
                        <Text style={[screenStyles.text, prenotaButtonStyles.buttonText]}>Prenota un posto</Text>
                    </View>
                </Pressable>
            }
            
            {isPrenotaClicked && 
            <View style={[prenotaButtonStyles.disdiciButtonContainer, prenotaButtonStyles.buttonContainer]}>
                <View style={[prenotaButtonStyles.toggleContainer, enabled ? prenotaButtonStyles.isInUfficioToggleContainer : prenotaButtonStyles.isNotInUfficioToggleContainer]}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={enabled}
                        thumbColor={!enabled ? colors.orange100 : colors.green100}
                        trackColor={{false: colors.orange40, true: colors.green40} }
                        style={{marginRight: 10}}
                        disabled={!clickable}
                    />
                    <Text style={[prenotaButtonStyles.buttonText, !enabled ? {color: colors.orange100} : {color: colors.green100}]}>{!enabled ? 'Non sono in ufficio' : 'Sono in ufficio'}</Text>
                </View>
                <View style={{width: '100%'}}>
                    <Pressable
                    onPress={()=>{
                        thunkDispatch(rimuoviPrenotazione())
                    }}>
                        <View style={[prenotaButtonStyles.button,  {backgroundColor: colors.red}]}>
                            <Text style={[prenotaButtonStyles.buttonText, {color: 'white'}]}>Disdici</Text>
                        </View>
                    </Pressable>
                  </View>
            </View>
            }
        </View>
    )
}

export default PrenotaButtonComponent;