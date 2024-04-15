import { StyleSheet } from 'react-native';
import PrenotazioneScreen from './PrenotazioneScreen.tsx'
import { colors } from '../../defaultStyles/colors.ts';

export const prenotazioneScreenStyles = StyleSheet.create({
    stanzeList: {
        // backgroundColor: 'red',
    },
    smallTexts: {
        fontSize: 12,
        color: 'white'
    },
    orarioIndicato: {
        paddingHorizontal: 36,
        paddingVertical: 17,
        backgroundColor: colors.black2,
        borderRadius: 9
    },
    orarioFormContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    loggedInUserInfos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default PrenotazioneScreen;