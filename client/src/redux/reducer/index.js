import { GET_GAMES, LOAD_GAMES, SEARCH_GAMES, GET_GAMES_BY_ID } from "../actions/index";

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

        case GET_GAMES_BY_ID:
            return{
                ...state,
                game: action.payload
            }

        case LOAD_GAMES:
            return {
                ...state,
                loading: action.payload
            }

        case SEARCH_GAMES:
            return {
                ...state,
                games: action.payload
            }
            default:
                return state

    }
}
export default rootReducer;