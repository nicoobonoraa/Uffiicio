import { StyleSheet } from "react-native";

export const dashStyles = StyleSheet.create({
    dot: {
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight: 10
    },
    peopleText: {
        fontSize: 24
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25
    },
    stanzeContainer: {
        backgroundColor: '#2E2E2E',
        borderRadius: 9,
        padding: 13,

    },
    innerStanzeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    upStanzaContainer: {
        marginBottom: 12

    }
})