import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import React, { FC } from 'react'
import { Text } from '@ui-kitten/components'
import { color, helper, theme } from '@utils'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProps } from '@types'

interface Props {
    name: string,
    image: string,
    num: number,
    isSelected?: boolean,
    onLongPress: () => void,
    selectedLength: number,
}
const PokemonSave: FC<Props> = ({ isSelected, name, image, num, onLongPress, selectedLength }) => {
    const getNumber = () => {
        if (num) {
            const number = num.toString().padStart(3, '0')
            return "#" + number
        }
    }
    const navigation = useNavigation<useNavigationProps>()

    return (
        <TouchableNativeFeedback
            onPress={() => selectedLength > 0 ? onLongPress() : navigation.navigate("PokemonShow", {
                name: name.toLocaleLowerCase()
            })}
            onLongPress={onLongPress}
            background={TouchableNativeFeedback.Ripple(color.ripple, false)}>
            <View style={[styles.content, isSelected && styles.selected]}>
                <Image source={{ uri: image }} style={styles.img} />
                <View style={styles.body}>
                    <Text style={theme.fontMedium} numberOfLines={1}>{name}</Text>
                    <Text appearance={"hint"} category="p2" style={theme.marginTop5}>{getNumber()}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default PokemonSave

const styles = StyleSheet.create({
    content: {
        width: "48%",
        ...theme.toCenter,
        paddingHorizontal: 10,
        marginBottom: 15,
        paddingVertical: 10,
    },
    img: {
        height: 120,
        width: 120,
        resizeMode: "contain"
    },
    body: {
        marginTop: 16,
        ...theme.toCenter
    },
    selected: {
        backgroundColor: color.ripple,
        borderWidth: 1,
        borderColor: color.primary,
        borderStyle: "dashed"
    }
})