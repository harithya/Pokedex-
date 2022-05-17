import { PokemonDetailStateProps, ReducerProps } from "@types"


const initialState: PokemonDetailStateProps = {
    data: {
        num: 0,
        name: '',
        hp: 0,
        colorTheme: 'transparent'
    }
}

export default (state = initialState, { type, payload }: ReducerProps) => {
    switch (type) {

        case "SET_POKEMON_DETAIL":
            return {
                ...state,
                data: payload
            }

        default:
            return state
    }
}
