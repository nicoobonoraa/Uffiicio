import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, TouchableOpacity, View, Switch, Pressable} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/store/store";
import { toggleIsInUfficio } from "../../../redux/reducers/reducers";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { deletePrenotazione } from "../../../redux/thunks/thunks";

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
        <View>

            {!isPrenotaClicked && 
                <Pressable
                onPress={(pressed) => {
                    console.log("pressed")
                    pageToNavigate && navigation.navigate(pageToNavigate)
                }}>
                    <Text>Prenotati</Text>
                    <Text>+</Text>
                </Pressable>
            }
            
            {isPrenotaClicked && 
            <View>
                <View>
                    <Text>Non sono in ufficio</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={enabled}
                    />
                </View>
                <View>
                    <Pressable
                    onPress={()=>{
                        thunkDispatch(deletePrenotazione(5))
                    }}>

                        <Text>X Disdici</Text>
                    </Pressable>
                  </View>
            </View>
            }
        </View>
    )
}

export default PrenotaButtonComponent;