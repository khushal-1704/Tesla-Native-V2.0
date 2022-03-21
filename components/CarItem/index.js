import React, { useEffect } from 'react';
import { View, Text, ImageBackground, BackHandler, Alert } from 'react-native';
import styles from './styles';
import StyleButton from '../StyleButton';
import { useNavigation } from '@react-navigation/native';


const CarItem = (props) => {
    const { name, tagline, taglineCTA, image, key } = props.car;
    const navigation = useNavigation()
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const handleOnPress = () => {
        navigation.navigate('Customize', { id: key })
        console.warn('Clicked')
    }
    return (
        <View style={styles.carContainer} key={key}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subTitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyleButton
                    type='primary'
                    content={'Custom Order'}
                    onPress={handleOnPress}
                />
                <StyleButton
                    type='secondary'
                    content={'Existing Inventory'}
                    onPress={() => {
                        navigation.navigate('Inventory')
                    }}
                />
            </View>
        </View>
    )
}

export default CarItem; 