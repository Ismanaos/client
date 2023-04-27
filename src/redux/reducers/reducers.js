const initialState = {
    number: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NUMBER":
            return {
                ...state,
                number: action.payload
            }
        default:
            return state
    }
}