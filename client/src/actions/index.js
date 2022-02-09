import axios from 'axios';

export const GET_GAMES = 'GET_GAMES'
export const LOAD_GAMES = 'LOAD_GAMES'


export function getGames(){
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/games")
        return dispatch({
            type: 'GET_GAMES',
            payload: json.data
        })
    }
}

export function loadingLoad(payload){
    return{
        type: 'LOAD_GAMES',
        payload
    }
}