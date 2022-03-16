import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingRight: 10,
        paddingLeft: 10,
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    imageContainer: {
        height: 100,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    detailsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    model: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    delTime: {
        fontWeight: '600',

    },
    upgradeContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,

    },
    upTyres: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tyreButtonContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tyreImg: {
        height: 40,
        width: 40,
    },
    bookingContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    bookingText: {
        fontWeight: 'bold',
    }

})

export default styles; 