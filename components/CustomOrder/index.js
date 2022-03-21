import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Button, Image, Pressable } from 'react-native'
import StyleButton from '../StyleButton'
import styles from './styles'




const CustomOrder = ({ }) => {
    const [total, setTotal] = useState('$69,420')
    const navigation = useNavigation()
    console.log(navigation)
    const handlePress = () => {
        navigation.navigate('Payment')
        console.warn('booking confirmed. Congo')
    }
    const date = new Date()
    console.log(date)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/teslaSmallCar.png')} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.model}>Model 3</Text>
                <Text style={styles.delTime}>Est. Delivery:{ }</Text>
            </View>
            <View style={styles.upgradeContainer}>
                <Text style={styles.upTyres}>Upgrade Tyres</Text>
                <View style={styles.tyreButtonContainer}>
                    <Image
                        source={require('../../assets/images/tyre.png')}
                        style={styles.tyreImg}
                    />
                    <View style={styles.btn}>
                        <StyleButton
                            type={'tertiary'}
                            content={'Upgrade for $99'}
                            onPress={handlePress} />
                    </View>
                </View>
            </View>
            <View style={styles.bookingContainer}>
                <Text style={styles.bookingText}>Confirm your Booking here!</Text>
                <StyleButton
                    type={'tertiary'}
                    content={'Proceed to Booking'}
                    onPress={handlePress}
                />
            </View>
        </View>
    )
}

export default CustomOrder; 