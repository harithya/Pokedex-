import { FlatList, StyleSheet, BackHandler, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DetailLayout, Empty, PokemonSave } from '@components'
import { constant, theme } from '@utils'
import { PokemonResultProps, PokemonSaveStateProps, PokemonSelectedStateProps } from '@types'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'src/redux/reducer'
import { emptyPokemonSelected, setPokemonSelected } from 'src/redux/actions/pokemonSelectedAction'
import { removePokemon } from 'src/redux/actions/pokemonSaveAction'

const PokemonSaveScreen = () => {
    const pokemonSaveState: PokemonSaveStateProps = useSelector((state: State) => state.pokemonSave);
    const pokemonSelectedState: PokemonSelectedStateProps = useSelector((state: State) => state.pokemonSelected);
    const pokemonSelectedLength = pokemonSelectedState.data.length
    const dispatch = useDispatch()

    useEffect(() => {
        const backAction = () => {
            if (pokemonSelectedLength > 0) {
                dispatch(emptyPokemonSelected());
                return true
            }
            return false
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [pokemonSelectedLength])

    const onRemovePokemon = () => {
        // confim remove
        Alert.alert(
            'Confirm',
            'Are you sure to remove this pokemon?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        pokemonSelectedState.data.map((num: number) => dispatch(removePokemon(num)))
                        dispatch(emptyPokemonSelected())
                    }
                },
            ],
            { cancelable: false }
        )
    }

    return (
        <DetailLayout
            actionIcon={pokemonSelectedLength > 0 ? 'trash-2-outline' : undefined}
            actionOnPress={onRemovePokemon}
            title={(pokemonSelectedLength > 0) ? `${pokemonSelectedLength} Item Selected` : 'My Pokemon'}>
            {pokemonSaveState.data.length > 0 ?
                <FlatList
                    data={pokemonSaveState.data}
                    numColumns={2}
                    columnWrapperStyle={theme.flexBetween}
                    keyExtractor={(item: PokemonResultProps) => item.num.toString()}
                    contentContainerStyle={styles.flatlist}
                    renderItem={({ item }) =>
                        <PokemonSave
                            name={item.name}
                            image={item.image}
                            num={item.num}
                            selectedLength={pokemonSelectedLength}
                            onLongPress={() => dispatch(setPokemonSelected(item.num))}
                            isSelected={pokemonSelectedState.data.includes(item.num)}
                        />}
                /> : <Empty />}
        </DetailLayout>
    )
}

export default PokemonSaveScreen

const styles = StyleSheet.create({
    flatlist: {
        paddingVertical: 16,
        paddingHorizontal: constant.container,
    }
})