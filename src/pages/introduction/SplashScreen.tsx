import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { color, theme } from '@utils'
import { PageProps } from '@types'

const SplashScreen: FC<PageProps> = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
        }, 1500);
    }, [])

    return (
        <>
            <StatusBar barStyle={"light-content"} translucent backgroundColor={"transparent"} />
            <ImageBackground source={require("../../assets/img/wp.webp")} style={styles.container}>
                <Image source={require("../../assets/img/logo.png")} style={styles.logo} />
            </ImageBackground>
        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        ...theme.flex1,
        ...theme.toCenter,
    },
    logo: {
        height: 120,
        width: 240,
        resizeMode: "contain"
    }
})