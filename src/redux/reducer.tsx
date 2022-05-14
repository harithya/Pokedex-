import { combineReducers, } from "redux";
import searchReducer from "./reducers/searchReducer";
const reducer = combineReducers({
    search: searchReducer,
})

export default reducer;

export type State = ReturnType<typeof reducer>