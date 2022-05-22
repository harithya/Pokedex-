import { store } from "../store"

const setPokemonSelected = (num: number) => {
    const pokemon = store.getState().pokemonSelected.data
    if (pokemon.includes(num)) {
        return {
            type: "SET_POKEMON_SELECTED",
            payload: pokemon.filter((item: number) => item !== num)
        }
    }
    else {
        return {
            type: "SET_POKEMON_SELECTED",
            payload: [...pokemon, num]
        }
    }
}

const emptyPokemonSelected = () => {
    return {
        type: "EMPTY_POKEMON_SELECTED",
        payload: []
    }
}


export { setPokemonSelected, emptyPokemonSelected }