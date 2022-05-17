import { Animated, StatusBar, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { color, constant, helper, theme } from '@utils'
import { useNavigation } from '@react-navigation/native'
import { PokemonDetailStateProps, useNavigationProps } from '@types'
import { useSelector } from 'react-redux'
import { State } from 'src/redux/reducer'

interface Props {
    animation: any
}
const PokemonDetailHeader: FC<Props> = ({ animation }) => {
    const pokemonDetailState: PokemonDetailStateProps = useSelector((state: State) => state.pokemonDetail);
    const { num, name } = pokemonDetailState.data
    const navigation = useNavigation<useNavigationProps>();
    const getTitle = () => {
        if (num) {
            const number = num.toString().padStart(3, '0')
            return "#" + number
        }
    }


    return (
        <>
            <StatusBar translucent backgroundColor={"transparent"} />
            <Animated.View style={[styles.container, { backgroundColor: animation }]}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-outline' fill={color.white} style={styles.icon} />
                    </TouchableOpacity>
                    <Text status={"control"} category="h5" style={styles.title}>{getTitle()}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("PokemonCatch", { number: num, name: name })}>
                        <Icon name='external-link-outline' fill={color.white} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </>
    )
}

export default PokemonDetailHeader

const styles = StyleSheet.create({
    header: {
        paddingTop: 24,
        paddingBottom: 16,
        paddingHorizontal: constant.container,
        ...theme.flexBetween,
    },
    title: {
        textAlign: "center",
        ...theme.fontBold,
    },
    icon: {
        height: 28,
        width: 28
    },
    container: {
        paddingTop: 25,
        position: "absolute",
        right: 0,
        left: 0,
        backgroundColor: "red",
        top: 0,
        zIndex: 9999999
    }
})