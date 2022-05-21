import { FlatList, StyleSheet, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DetailLayout, Empty, PokemonSave } from '@components'
import { constant, theme } from '@utils'
import { PokemonResultProps, PokemonSaveStateProps } from '@types'
import { useSelector } from 'react-redux'
import { State } from 'src/redux/reducer'

const PokemonSaveScreen = () => {
    const pokemonSaveState: PokemonSaveStateProps = useSelector((state: State) => state.pokemonSave);

    const [pokemonSelected, setPokemonSelected] = useState<number[]>([])
    const onSelected = (num: number) => {
        if (pokemonSelected.includes(num)) {
            setPokemonSelected(pokemonSelected.filter(item => item !== num))
        } else {
            setPokemonSelected([...pokemonSelected, num])
        }
    }

    useEffect(() => {
        const backAction = () => {
            if (pokemonSelected.length > 0) {
                setPokemonSelected([]);
                return true
            }
            return false
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [pokemonSelected.length])




    return (
        <DetailLayout>
            {pokemonSaveState.data.length > 0 ?
                <FlatList
                    data={pokemonSaveState.data}
                    numColumns={2}
                    columnWrapperStyle={theme.flexBetween}
                    keyExtractor={(item: PokemonResultProps) => item.num.toString()}
                    contentContainerStyle={styles.flatlist}
                    renderItem={({ item, index }) =>
                        <PokemonSave
                            name={item.name}
                            image={item.image}
                            num={item.num}
                            selectedLength={pokemonSelected.length}
                            onLongPress={() => onSelected(item.num)}
                            isSelected={pokemonSelected.includes(item.num)}
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