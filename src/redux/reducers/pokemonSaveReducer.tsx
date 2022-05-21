import { PokemonSaveStateProps, ReducerProps } from "@types"

const initialState: PokemonSaveStateProps = {
    data: []
}

export default (state = initialState, { type, payload }: ReducerProps) => {
    switch (type) {

        case "SAVE_POKEMON":
            return {
                ...state,
                data: payload
            }

        case "REMOVE_POKEMON":
            return {
                ...state,
                data: payload
            }

        default:
            return state
    }
}
