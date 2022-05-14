const setKeyword = (value: string) => {
    return {
        type: 'SET_KEYWORD_SEARCH',
        payload: value
    }
}

const removeKeyword = () => {
    return {
        type: "REMOVE_KEYWORD_SEARCH",
        payload: ''
    }
}

export { setKeyword, removeKeyword }