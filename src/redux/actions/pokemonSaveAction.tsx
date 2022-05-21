import { PokemonResultProps } from "@types"
import store from "../store"

const savePokemon = (data: PokemonResultProps) => {
    const dataOld = store.getState().pokemonSave.data
    // check if exist
    const isExist = dataOld.find((item: PokemonResultProps) => item.num === data.num)

    return {
        type: "SAVE_POKEMON",
        payload: isExist ? dataOld : [...dataOld, data]
    }
}

const removePokemon = (num: number) => {
    const dataOld = store.getState().pokemonSave.data
    return {
        type: "REMOVE_POKEMON",
        payload: dataOld.filter((item: PokemonResultProps) => item.num !== num)
    }
}

export { savePokemon, removePokemon }