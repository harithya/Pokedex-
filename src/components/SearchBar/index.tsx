import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { color, constant, theme } from '@utils'
import Input from '../Form/Input'
import { SearchStateProps } from '@types'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'src/redux/reducer'
import { removeKeyword, setKeyword } from 'src/redux/actions/searchAction'

interface Props {
    style?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle>,
}
const SearchBar: FC<Props> = (props) => {
    const searchState: SearchStateProps = useSelector((state: State) => state.search);
    const dispatch = useDispatch();

    return (
        <View style={[styles.container, props.style]}>
            <Input
                containerStyle={theme.marginBottom0}
                style={[styles.searchbar, props.inputStyle]}
                leftIcon="search-outline"
                rightIcon={searchState.data ? "close-circle-outline" : undefined}
                righIconOnPress={() => dispatch(removeKeyword())}
                value={searchState.data}
                onChangeText={(value) => dispatch(setKeyword(value))}
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