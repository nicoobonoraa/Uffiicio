import { StyleSheet } from "react-native";
import { colors } from "../../../defaultStyles/colors";

export const personInfoStyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 30,
        backgroundColor: colors.black2,
        borderRadius: 7,
        marginBottom: 6
    },
    date: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 50,
        position: 'absolute',
        top: -5,
        left: -5,
        zIndex: 100

    }
})