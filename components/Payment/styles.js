import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    paymentContainer: {
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        borderColor: '#3e6ae1',
        borderWidth: 2,
    },
    paymentHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    detailsContainer: {
        // backgroundColor: 'pink',
        height: '80%',
        width: '100%',
    },
    detail: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    detHeading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detSubHeading: {
        fontSize: 20,
        textAlign: 'right'
    },
    totalAmount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fbfefb',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    bookingBtn: {
        marginTop: -30
    }
})

export default styles;