import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const screenStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1E1E1E',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Platform.OS == 'ios' ? 60 : 20
    },
    text: {
        color: '#ffff'
    },
    semiBoldTitle: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white'
    }
})