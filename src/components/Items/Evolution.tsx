import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import React, { FC } from 'react'
import { color, helper, theme } from '@utils'
import { Icon, Text } from '@ui-kitten/components'
import { useQuery } from 'react-query'
import { fetchPokemonDetail } from 'src/pages/pokemon/PokemonShowScreen'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProps } from '@types'

interface Props {
    isLast?: boolean,
    name: string,
    colortTheme: string,
}

const Evolution: FC<Props> = ({ isLast, name, colortTheme }) => {
    const { data } = useQuery(['detail', name], () => fetchPokemonDetail(name));
    const detail = data?.variations[0]

    const navigation = useNavigation<useNavigationProps>()
    return (
        <View style={theme.flexStart}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(color.ripple, false)}
                onPress={() => navigation.navigate("PokemonShow", { name: name })}>
                <View style={[styles.card]}>
                    <Image source={{ uri: helper.getPokemonImage(data?.num) }} style={styles.img} />
                    <Text category={"p2"} style={styles.title}>{detail?.name}</Text>
                    <Text style={[theme.textCenter, theme.fontRegular]} category="c1" appearance={"hint"}>{"#" + data?.num.toString().padStart(3, '0')}</Text>
                </View>
            </TouchableNativeFeedback>
            {!isLast &&
                <View>
                    <Icon name='arrowhead-right-outline' fill={colortTheme} style={styles.icon} />
                </View>}
        </View>
    )
}

export default Evolution

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        marginBottom: 10
    },
    card: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    },
    title: {
        ...theme.textCenter,
        ...theme.fontMedium,
        ...theme.marginBottom5
    },
    icon: {
        height: 50,
        width: 50,
        marginLeft: 10
    }
})