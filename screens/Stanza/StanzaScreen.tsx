import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Pressable
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from "../../redux/store/store";
import PersonInfosComponent from '../../components/atoms/PersonInfosComponent/PersonInfosComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { screenStyles } from '../screenStyles/screenStyles';
import Icon from 'react-native-vector-icons/FontAwesome';


const StanzaScreen = (props : any) => {
    
    const navigation : NavigationProp<any, any> = useNavigation();

    const stanzaId = useSelector((state: IRootState) => state.peopleReducer.selectedRoom) 
    const prenotazioni = useSelector((state: IRootState) => state.peopleReducer.prenotazioneList).filter(prenotazione => prenotazione.stanza === stanzaId)

    return (
        <View style={screenStyles.wrapper}>

            {/* Header */}
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 27}}>
                <Pressable
                onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" size={20} color="white" style={{marginRight: 33}} />            
                </Pressable>
                <Text style={screenStyles.semiBoldTitle}>PrenotazioneScreen</Text>
            </View>
            <FlatList
            data={prenotazioni}
            renderItem={({item}) => <PersonInfosComponent key={item.id} prenotazione={item}/>} />
        </View>
    )
}

export default StanzaScreen;