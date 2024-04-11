import React from "react";
import { View, Text, Image } from "react-native";

const PersonInfosComponent = (props : any) => {
    
    const {person} = props
    
    return (
        <View>
            <Image
                source={{
                    uri: person.profilePic
                }}
            />
            <Text>{person.name}</Text>
            <Text>{person.oraArrivo}</Text>
            <Text>{person.oraUscita}</Text>
        </View>
    )
}

export default PersonInfosComponent