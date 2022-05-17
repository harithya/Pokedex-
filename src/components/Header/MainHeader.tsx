import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { color, constant, theme } from '@utils'
import SearchBar from '../SearchBar'
import { Icon } from '@ui-kitten/components'

const MainHeader = () => {
    return (
        <View>
            <View style={styles.header}>
                <Icon name='menu-2-outline' fill={color.white} style={styles.icon} />
                <Image source={require("../../assets/img/logo.png")} style={styles.logo} />
                <Icon name='bookmark-outline' fill={color.white} style={styles.icon} />
            </View>
            <View style={styles.spacer} />
            <SearchBar />
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.primary,
        ...theme.flexBetween,
        paddingHorizontal: constant.container
    },
    logo: {
        height: 60,
        width: 200,
        resizeMode: "contain"
    },
    spacer: {
        height: 30,
        backgroundColor: color.primary
    },
    icon: {
        height: 28,
        width: 28
    }
})