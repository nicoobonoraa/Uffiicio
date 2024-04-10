import React, { useEffect } from "react";
import {
    View,
    Text,
    Image
} from 'react-native'

const ProfileImageComponent = (props : any) => {

    const {width, height, src} = props


    return (
        <View>
            <Image
                source={{
                    uri: src
                }}
                width={width | 50}
                height={height | 50}
            ></Image>
        </View>
    )
}

export default ProfileImageComponent
