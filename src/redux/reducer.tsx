import { combineReducers, } from "redux";
import searchReducer from "./reducers/searchReducer";
import pokemonDetailReducer from "./reducers/pokemonDetailReducer";

const reducer = combineReducers({
    search: searchReducer,
    pokemonDetail: pokemonDetailReducer
})

export default reducer;

export type State = ReturnType<typeof reducer>