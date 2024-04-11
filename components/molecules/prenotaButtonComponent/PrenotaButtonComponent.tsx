import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, TouchableOpacity, View, Switch, Pressable} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/store/store";
import { removePerson, toggleIsInOffice } from "../../../redux/reducers/reducers";

const PrenotaButtonComponent = (props : any) => {
    
    const { pageToNavigate } = props
    const [enabled, setEnabled] = useState(false)

    const dispatch = useDispatch()

    const isPrenotaClicked = useSelector((state: IRootState) => state.peopleReducer.isPrenotato)
    const navigation : NavigationProp<any, any> = useNavigation();

    const toggleSwitch = () => {
        setEnabled(!enabled)
        dispatch(toggleIsInOffice(!enabled))
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
                        dispatch(removePerson())
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