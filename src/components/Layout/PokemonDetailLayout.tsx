import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { color, constant, helper, theme } from '@utils'
import PokemonDetailHeader from '../Header/PokemonDetailHeader'
import Loading from '../Loading'

interface Props {
    pokemonNumber: number | undefined,
    isLoading: boolean,
    color: string
}
const PokemonDetailLayout: FC<Props> = ({ children, isLoading, pokemonNumber, color }) => {
    return (
        <View style={[theme.flex1, { backgroundColor: helper.hexToRgb(color, 0.7) }]}>
            {isLoading ? <Loading /> :
                <ScrollView contentContainerStyle={styles.container}>
                    <Image source={require("../../assets/img/wm.png")} style={styles.watermark} />
                    <PokemonDetailHeader pokemonNumber={pokemonNumber ?? 0} />
                    {pokemonNumber && <View style={styles.banner}>
                        <Image source={{ uri: helper.getPokemonImage(pokemonNumber) }} style={styles.img} />
                    </View>}
                    <View style={styles.content}>
                        <View style={styles.body}>
                            {children}
                        </View>
                    </View>
                </ScrollView>}
        </View>
    )
}

export default PokemonDetailLayout

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    banner: {
        height: 160,
        alignItems: "center",
        zIndex: 99
    },
    img: {
        height: 230,
        resizeMode: "contain",
        width: 230,
    },
    content: {
        flex: 1,
        backgroundColor: color.white,
        zIndex: 9,
        borderRadius: 10
    },
    watermark: {
        height: 270,
        width: 270,
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 9
    },
    body: {
        marginTop: 80,
    }
})