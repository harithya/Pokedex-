import { combineReducers, } from "redux";
import searchReducer from "./reducers/searchReducer";
import pokemonDetailReducer from "./reducers/pokemonDetailReducer";
import pokemonSaveReducer from "./reducers/pokemonSaveReducer";

const reducer = combineReducers({
    search: searchReducer,
    pokemonDetail: pokemonDetailReducer,
    pokemonSave: pokemonSaveReducer
})

export default reducer;

export type State = ReturnType<typeof reducer>