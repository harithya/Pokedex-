import { combineReducers } from "redux";
import searchReducer from "./reducers/searchReducer";
import pokemonDetailReducer from "./reducers/pokemonDetailReducer";
import pokemonSaveReducer from "./reducers/pokemonSaveReducer";
import pokemonSelectedReducer from "./reducers/pokemonSelectedReducer";

const reducer = combineReducers({
    search: searchReducer,
    pokemonDetail: pokemonDetailReducer,
    pokemonSave: pokemonSaveReducer,
    pokemonSelected: pokemonSelectedReducer
})

export default reducer;

export type State = ReturnType<typeof reducer>