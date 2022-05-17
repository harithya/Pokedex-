import { Image, ImageBackground, StatusBar, StyleSheet, View, Linking } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { color, constant, helper, theme } from '@utils'
import GifImage from '@lowkey/react-native-gif';
import { PageProps } from '@types';
import { Icon, Text } from '@ui-kitten/components';
import axios from 'axios';

const PokemonCatchScreen: FC<PageProps<'PokemonCatch'>> = ({ route }) => {

    const [isSecondaryImage, setIsSecondaryImage] = useState(false);

    const firstUrl = `https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${route.params.number}.gif`;
    const secondaryUrl = `https://projectpokemon.org/images/normal-sprite/${route.params.name.toLowerCase()}.gif`

    useEffect(() => {
        const checkUrl = async () => {
            try {
                const req = await axios.get(firstUrl);
            } catch (error) {
                setIsSecondaryImage(true)
            }
        }
        checkUrl()
    }, [])


    return (
        <>
            <StatusBar barStyle={"dark-content"} translucent backgroundColor={"transparent"} />
            <ImageBackground source={require("../../assets/img/go.jpg")} style={styles.container}>
                <View style={styles.header}>
                    <Icon name='arrow-back-outline' fill={color.white} style={styles.action} />
                    <View style={styles.bar}>
                        <View style={styles.barContainer}>
                            <View style={styles.barHeader}>
                                <Text status={"control"} style={theme.fontSemiBold}>HP</Text>
                            </View>
                            <Text category={"h5"} style={styles.hpTitle}>150</Text>
                        </View>
                    </View>
                </View>
                <View style={[theme.flex1, theme.toCenter]}>
                    <GifImage
                        source={{ uri: isSecondaryImage ? secondaryUrl : firstUrl }}
                        style={[styles.img, isSecondaryImage && styles.imgSecondary]}
                        resizeMode="contain"
                    />
                    <Image source={require("../../assets/img/poke-game.png")} style={styles.ball} />
                </View>

            </ImageBackground>
        </>
    )
}

export default PokemonCatchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        marginTop: -120,
        height: 170,
        width: 170,
    },
    imgSecondary: {
        height: 200,
        width: 200,
    },
    bar: {
        height: 50,
        backgroundColor: color.gray,
        borderRadius: 50,
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignSelf: "flex-start",
        marginLeft: 10
    },
    barHeader: {
        backgroundColor: color.bug,
        alignSelf: "flex-start",
        height: 40,
        width: 40,
        ...theme.toCenter,
        borderRadius: 50
    },
    barContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    hpTitle: {
        marginLeft: 10,
        paddingRight: 10,
        color: color.bug
    },
    ball: {
        height: 100,
        width: 100,
        position: "absolute",
        bottom: 100,
    },
    header: {
        ...theme.flexBetween,
        position: "absolute",
        right: constant.container,
        left: constant.container,
        top: 40
    },
    action: {
        height: 30,
        width: 30
    }
})