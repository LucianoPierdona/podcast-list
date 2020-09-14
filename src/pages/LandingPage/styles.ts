import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#655c56",
        fontSize: 35,
        fontWeight: "700",
    },
    logo: {
        resizeMode: 'contain',
        width: 350,
        height: 350,
    },
    button: {
        backgroundColor: "#ccedd2",
        paddingHorizontal: 65,
        paddingVertical: 20,
        borderRadius: 12,
    },
    buttonText: {
        color: "#655c56",
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold"
    }
});