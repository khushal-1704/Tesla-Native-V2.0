import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import MenuBar from '../MenuBar'
import styles from './styles'
import { StatusBar } from 'react-native'

const Header = () => {
    const [menuBar, setMenuBar] = useState(false)
    const handleMLogo = () => {
        console.warn('clicked logo')
    }

    const handleBar = () => {
        setMenuBar(preState => !preState)
        console.warn('button pressed')
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" hidden={false} />
            <View>
                <Pressable onPress={handleMLogo}>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                </Pressable>
            </View>

            <View>
                <Pressable onPress={handleBar}>
                    <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
                </Pressable>
            </View>
            {menuBar ?
                <MenuBar menuBar={menuBar} handleBar={handleBar} />
                :
                <Text style={{ display: 'none' }}></Text>
            }
        </View>
    )
}

export default Header; 