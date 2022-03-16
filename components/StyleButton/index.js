import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './styles'

const StyleButton = ({ type, content, onPress }) => {
    let backgroundColor, textColor;
    switch (type) {
        case 'primary':
            backgroundColor = '#171A20CC';
            textColor = '#FFF'
            break
        case 'secondary':
            backgroundColor = '#FFFFFFA6';
            textColor = '#171A20CC'
            break
        case 'tertiary':
            backgroundColor = '#3e6ae1'
            textColor = '#FFF'
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={onPress}>
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton; 