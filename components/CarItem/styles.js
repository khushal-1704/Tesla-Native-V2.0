import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
    },
    subTitle: {
        fontSize: 15,
        color: '#5c5e62',
    },
    subTitleCTA: {
        textDecorationLine: "underline"
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonContainer: {
        marginBottom: 50,
    }
});

export default styles; 