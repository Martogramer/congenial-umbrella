const initialState = {
    games: [],
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                games: action.payload,
            }
    }
}
export default rootReducer;