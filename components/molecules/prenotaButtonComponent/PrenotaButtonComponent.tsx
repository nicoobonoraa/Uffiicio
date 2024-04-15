import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, TouchableOpacity, View, Switch, Pressable} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/store/store";
import { toggleIsInUfficio } from "../../../redux/reducers/reducers";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { deletePrenotazione } from "../../../redux/thunks/thunks";
import { screenStyles } from "../../../screens/screenStyles/screenStyles";
import { prenotaButtonStyles } from "./prenotaButtonStyles";
import { colors } from "../../../defaultStyles/colors";

const PrenotaButtonComponent = (props : any) => {
    
    const { pageToNavigate } = props
    const [enabled, setEnabled] = useState(false)

    const thunkDispatch = useDispatch<ThunkDispatch<IRootState, any,any>>()

    const isPrenotaClicked = useSelector((state: IRootState) => state.peopleReducer.isPrenotazioneEffettuata)
    const navigation : NavigationProp<any, any> = useNavigation();

    const toggleSwitch = () => {
        setEnabled(!enabled)
        thunkDispatch(toggleIsInUfficio())
    }

    return (
        <View style={{flex: 1}}>

            {!isPrenotaClicked && 
                <Pressable
                style={prenotaButtonStyles.buttonContainer}
                onPress={(pressed) => {
                    console.log("pressed")
                    pageToNavigate && navigation.navigate(pageToNavigate)
                }}>
                    <View style = {[{margin: 0}, prenotaButtonStyles.button]}>
                        <Text style={[screenStyles.text, {fontWeight: '600', fontSize: 16}]}>Prenota un posto</Text>
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
                    />
                    <Text style={[prenotaButtonStyles.buttonText, !enabled ? {color: colors.orange100} : {color: colors.green100}]}>Non sono in ufficio</Text>
                </View>
                <View style={{width: '100%'}}>
                    <Pressable
                    onPress={()=>{
                        thunkDispatch(deletePrenotazione(5))
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