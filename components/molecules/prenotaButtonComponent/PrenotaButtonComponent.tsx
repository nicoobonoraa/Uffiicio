import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, TouchableOpacity, View, Switch, Pressable} from 'react-native'


const PrenotaButtonComponent = (props : any) => {
    
    const { isPrenotaClicked, pageToNavigate } = props

    const navigation : NavigationProp<any, any> = useNavigation();

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
                    <Switch disabled={false}/>
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