import axios from 'axios';

export function getGames(){
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/games")
        return dispatch({
            type: 'GET_GAMES',
            payload: json.data
        })
    }
}