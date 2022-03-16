import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CarItem from "../CarItem";
import styles from './styles';
import { cars } from '../data';
import Header from '../Header';

const CarsList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'end'}
                decelerationRate={'normal'}
            />
        </View>
    );
};

export default CarsList;