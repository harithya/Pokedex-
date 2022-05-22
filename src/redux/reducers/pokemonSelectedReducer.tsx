import { PokemonSelectedStateProps, ReducerProps } from "@types"

const initialState: PokemonSelectedStateProps = {
    data: []
}

export default (state = initialState, { type, payload }: ReducerProps) => {
    switch (type) {

        case "SET_POKEMON_SELECTED":
            return {
                ...state,
                data: payload
            }

        case "EMPTY_POKEMON_SELECTED":
            return {
                ...state,
                data: payload
            }

        default:
            return state
    }
}
