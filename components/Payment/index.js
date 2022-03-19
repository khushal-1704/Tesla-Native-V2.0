import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import StyleButton from '../StyleButton'

const Payment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.paymentContainer}>
                <Text style={styles.paymentHeader}>Payment Details</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detail}>
                        <Text style={styles.detHeading}>Car Prize :</Text>
                        <Text style={styles.detSubHeading}> $ 54,000</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detHeading}>Car Accessories :</Text>
                        <Text style={styles.detSubHeading}> $ 2,000</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detHeading}>Tax :</Text>
                        <Text style={styles.detSubHeading}> $ 2,000</Text>
                    </View>
                    <View style={styles.totalAmount}>
                        <Text style={styles.detHeading}>Total Amount :</Text>
                        <Text style={styles.detSubHeading}> $ 67,000</Text>
                    </View>
                </View>
                <View style={styles.bookingBtn}>
                    <StyleButton type={'tertiary'}
                        content={'Confirm Booking'} />
                </View>
            </View>
        </View>
    )
}

export default Payment