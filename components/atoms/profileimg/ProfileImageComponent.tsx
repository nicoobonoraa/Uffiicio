import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image
} from 'react-native'

const ProfileImageComponent = (props : any) => {

    const {width, height, src, isInOffice, isLeftColumn, person} = props
    const [isOffice, setIsOffice] = useState(isInOffice)

    console.log("person Arrived", person)

    useEffect(() => {
        // console.log("aggiornato")
        setIsOffice(isInOffice)
    }, [isInOffice])

    return (
        <View>
            <Image
                source={{
                    uri: person.profilePic
                }}
                width={width | 50}
                height={height | 50}
                style={[!isOffice ? {opacity: 0.3} : {opacity: 1}, {borderRadius: 50, marginRight: 10}]}
            ></Image>
        </View>
    )
}

export default ProfileImageComponent
