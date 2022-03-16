import React from 'react'
import { View, Text, FlatList, Dimensions, Pressable } from 'react-native'

import { menuList } from '../data'
import MenuItem from '../MenuItem'
import styles from './styles'

const MenuBar = ({ handleBar, menuBar }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={handleBar}  >
                <View style={styles.closeTab}  >
                    <Text>Close Tab</Text>
                </View>
            </Pressable>
            <View>
                <FlatList
                    data={menuList}
                    renderItem={({ item }) => <MenuItem item={item} />}
                    keyExtractor={(item, index) => 'key' + index}
                />
            </View>
            <Text style={{ alignSelf: 'center' }}>Earth Icon</Text>
        </View>
    )
}

export default MenuBar; 