import { StyleSheet } from "react-native";
import { colors } from "../../../defaultStyles/colors";

export const prenotaButtonStyles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 25,
        width: '100%'
    },
    button: {
        backgroundColor: colors.blue,
        paddingVertical: 13,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        width: '100%',
        marginTop: 10
    },
    disdiciButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    toggleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 9,
        paddingVertical: 12
    },
    isNotInUfficioToggleContainer: {
        backgroundColor: colors.orange20,
    },
    isInUfficioToggleContainer: {
        backgroundColor: colors.green20,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20
    }
})