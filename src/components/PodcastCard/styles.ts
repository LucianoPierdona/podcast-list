import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:  "#fff",
        width: "90%",
        flexDirection: "row",
        marginHorizontal: 20,
        marginBottom: 15,
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 25,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    imageCard: {
        width: 190,
        height: 120,
        resizeMode: "contain"
    },
    cardRight: {
        width: "50%",
        marginLeft: 15
    },
    title: {
        color: "#655c56",
        fontSize: 16,
        fontWeight: "700"
    },
    description: {
        marginTop: 1,
        width: "95%",
        color: "#94d3ac",
        fontWeight: "500"
    }
});