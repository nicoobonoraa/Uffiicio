import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from "../../redux/store/store";
import PersonInfosComponent from '../../components/atoms/PersonInfosComponent/PersonInfosComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';


const StanzaScreen = (props : any) => {
    
    const navigation : NavigationProp<any, any> = useNavigation();

    const stanzaId = useSelector((state: IRootState) => state.peopleReducer.selectedRoom) 
    const people = useSelector((state: IRootState) => state.peopleReducer.peopleList).filter(person => person.stanza === stanzaId)

    return (
        <View>
            <TouchableOpacity
            onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
            <Text>StanzaScreen</Text>
            <FlatList
            data={people}
            renderItem={({item}) => <PersonInfosComponent key={item.key} person={item}/>} />
        </View>
    )
}

export default StanzaScreen;