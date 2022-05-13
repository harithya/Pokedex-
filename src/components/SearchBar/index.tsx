import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { color, constant, theme } from '@utils'
import Input from '../Form/Input'

interface Props {
    style?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle>,
}
const SearchBar: FC<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Input
                containerStyle={theme.marginBottom0}
                style={[styles.searchbar, props.inputStyle]}
                leftIcon="search-outline"
                placeholder='Find your favorite pokemon ?'
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: constant.container,
        marginTop: -28,
    },
    searchbar: {
        backgroundColor: color.white,
        borderRadius: 10,
        ...theme.boxShadow
    }
})