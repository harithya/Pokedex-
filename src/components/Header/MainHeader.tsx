import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { color, constant, theme } from '@utils'
import SearchBar from '../SearchBar'
import { Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProps } from '@types'

interface Props {
    onMenuPress?: () => void
}
const MainHeader: FC<Props> = ({ onMenuPress }) => {
    const navigation = useNavigation<useNavigationProps>()
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={onMenuPress}>
                    <Icon name='menu-2-outline' fill={color.white} style={styles.icon} />
                </TouchableOpacity>
                <Image source={require("../../assets/img/logo.png")} style={styles.logo} />
                <TouchableOpacity onPress={() => navigation.navigate("PokemonSave")}>
                    <Icon name='bookmark-outline' fill={color.white} style={styles.icon} />
                </TouchableOpacity>
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