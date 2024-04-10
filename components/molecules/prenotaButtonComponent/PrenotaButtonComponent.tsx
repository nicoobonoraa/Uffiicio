import React from "react";
import {Text, TouchableOpacity, View, Switch} from 'react-native'
import { AntDesign, MaterialIcons  } from '@expo/vector-icons';

const PrenotaButtonComponent = (props : any) => {
    
    const { isPrenotaClicked } = props

    return (
        <View>

            {!isPrenotaClicked && 
            <View>
                <TouchableOpacity>Prenotati</TouchableOpacity>
                <AntDesign name="plus" size={24} color="black" />
            </View>
            }
            
            {isPrenotaClicked && 
            <View>
                <View>
                    <Text>Non sono in ufficio</Text>
                    <Switch></Switch>
                </View>
                <View>
                    <MaterialIcons name="cancel" size={24} color="black" />
                </View>
            </View>
            }
        </View>
    )
}

export default PrenotaButtonComponent;