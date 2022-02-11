import { GET_GAMES, LOAD_GAMES } from "../actions/index";

const initialState = {
    games : [],
    loading: false
}

function rootReducer (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                
            }
        default:
            return state

        case LOAD_GAMES:
            return {
                ...state,
                loading: action.payload
            }

    }
}
export default rootReducer;