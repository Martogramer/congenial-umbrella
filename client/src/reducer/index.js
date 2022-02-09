import { GET_GAMES, LOAD_GAMES } from "../actions";

const initialState = {
    videogames: [],
    loading: false
}

function rootReducer (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                videogames: action.payload,
                allGames: action.payload
            }
        case LOAD_GAMES:
            return {
                ...state,
                loading: action.payload
            }

    }
}
export default rootReducer;