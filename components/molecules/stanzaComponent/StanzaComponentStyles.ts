import { StyleSheet } from "react-native";
import { colors } from "../../../defaultStyles/colors";

export const stanzaStyles = StyleSheet.create({
    stanza: {
        // width: '100%',
        backgroundColor: colors.black3,
        height: 155,
        borderRadius: 9,
        padding: 16,
    },
    listOfPeople: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
})