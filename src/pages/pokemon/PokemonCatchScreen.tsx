import { Image, ImageBackground, StatusBar, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { color, constant, helper, theme } from '@utils'
import GifImage from '@lowkey/react-native-gif';
import { PageProps } from '@types';
import { Text } from '@ui-kitten/components';

const PokemonCatchScreen: FC<PageProps<'PokemonCatch'>> = ({ route }) => {
    return (
        <>
            <StatusBar barStyle={"dark-content"} translucent backgroundColor={"transparent"} />
            <ImageBackground source={require("../../assets/img/go.jpg")} style={styles.container}>
                <View style={styles.bar}>
                    <View style={styles.barContainer}>
                        <View style={styles.barHeader}>
                            <Text status={"control"} style={theme.fontSemiBold}>HP</Text>
                        </View>
                        <Text category={"h5"} style={styles.hpTitle}>150</Text>
                    </View>
                </View>
                <GifImage
                    source={{ uri: `https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${route.params.number}.gif` }}
                    style={styles.img}
                    resizeMode="contain"
                />

                <Image source={require("../../assets/img/poke-game.png")} style={styles.ball} />
            </ImageBackground>
        </>
    )
}

export default PokemonCatchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...theme.toCenter,
    },
    img: {
        marginTop: -120,
        height: 170,
        width: 170,
    },
    bar: {
        // width: 200,
        height: 50,
        top: 50,
        left: constant.container,
        position: "absolute",
        backgroundColor: color.gray,
        borderRadius: 50,
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 10,
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
    }
})