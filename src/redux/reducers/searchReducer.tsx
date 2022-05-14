import { ReducerProps, SearchStateProps } from "@types"

const initialState: SearchStateProps = {
    data: ''
}

export default (state = initialState, { type, payload }: ReducerProps) => {
    switch (type) {

        case "SET_KEYWORD_SEARCH":
            return {
                ...state,
                data: payload
            }

        case "REMOVE_KEYWORD_SEARCH":
            return {
                ...state,
                data: payload
            }

        default:
            return state
    }
}
