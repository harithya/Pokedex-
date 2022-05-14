import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { color, constant, helper, theme } from '@utils'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProps } from '@types'

interface Props {
    pokemonNumber: number
}
const PokemonDetailHeader: FC<Props> = ({ pokemonNumber }) => {
    const navigation = useNavigation<useNavigationProps>();

    const getTitle = () => {
        if (pokemonNumber) {
            const number = pokemonNumber.toString().padStart(3, '0')
            return "#" + number
        }
    }

    return (
        <>
            <StatusBar translucent backgroundColor={"transparent"} />
            <View style={styles.spacer} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back-outline' fill={color.white} style={styles.icon} />
                </TouchableOpacity>
                <Text status={"control"} category="h5" style={styles.title}>{getTitle()}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("PokemonCatch", { number: pokemonNumber })}>
                    <Icon name='external-link-outline' fill={color.white} style={styles.icon} />
                </TouchableOpacity>

            </View>
        </>
    )
}

export default PokemonDetailHeader

const styles = StyleSheet.create({
    header: {
        paddingVertical: 24,
        backgroundColor: "transparent",
        paddingHorizontal: constant.container,
        ...theme.flexBetween,
        zIndex: 99999999
    },
    spacer: {
        height: 28
    },
    title: {
        textAlign: "center",
        ...theme.fontBold,
    },
    icon: {
        height: 28,
        width: 28
    }
})