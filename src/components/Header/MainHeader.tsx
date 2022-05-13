import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { color, theme } from '@utils'
import SearchBar from '../SearchBar'

const MainHeader = () => {
    return (
        <View>
            <View style={styles.header}>
                <Image source={require("../../assets/img/logo.png")} style={styles.logo} />
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
        ...theme.toCenter
    },
    logo: {
        height: 60,
        width: 200,
        resizeMode: "contain"
    },
    spacer: {
        height: 30,
        backgroundColor: color.primary
    }
})