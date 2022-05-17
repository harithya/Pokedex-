import { PokemonDetailProps } from "@types"

const setPokemonDetail = (data: PokemonDetailProps) => {
    return {
        type: 'SET_POKEMON_DETAIL',
        payload: data
    }
}

export { setPokemonDetail }