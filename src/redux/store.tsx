import { createStore } from "redux";
import reducer, { State } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig: any = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['pokemonSave']
}

const persistedReducer = persistReducer<State>(persistConfig, reducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store)

export { store, persistor }