import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, TouchableOpacity, View, Switch, Pressable} from 'react-native'
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store/store";


const PrenotaButtonComponent = (props : any) => {
    
    const { pageToNavigate } = props
    const [enabled, setEnabled] = useState(false)

    const isPrenotaClicked = useSelector((state: IRootState) => state.peopleReducer.isPrenotato)
    const navigation : NavigationProp<any, any> = useNavigation();

    const toggleSwitch = () => {
        setEnabled(!enabled)
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
                    <Text>X Disdici</Text>
                  </View>
            </View>
            }
        </View>
    )
}

export default PrenotaButtonComponent;