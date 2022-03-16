import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        justifyContent: 'space-between',
        zIndex: 100,
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '100%',

    },
    logo: {
        height: 20,
        width: 100,
        resizeMode: 'contain',
    },
    menu: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    }
});

export default styles;