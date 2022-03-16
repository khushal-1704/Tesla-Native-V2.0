import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

const MenuItem = (props) => {
    const { name, reDir } = props.item
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{name}</Text>
        </View>
    )
}

export default MenuItem; 