import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import StyleButton from '../StyleButton';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const navigation = useNavigation()

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token)).catch(error => console.log(error));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    const handlePress = () => {
        navigation.navigate('Home')
    }

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
                        content={'Confirm Booking'}
                        onPress={async () => {
                            await schedulePushNotification()
                        }
                        }
                    />
                </View>
            </View>
        </View>
    );
}

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Booking Conformation 🎉🎉",
            body: 'Elon🚀 is one the way to deliver your car🚗.',
        },
        trigger: { seconds: 1 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}