import axios from 'axios';

export const GET_GAMES = 'GET_GAMES'
export const LOAD_GAMES = 'LOAD_GAMES'
export const SEARCH_GAMES = 'SEARCH_GAMES'


export const getGames=()=>async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:3001/games')
        dispatch({
            type: GET_GAMES,
            payload: res.data
        })
    } catch (err){return err}
}

export function loadingLoad(payload){
    return{
        type: LOAD_GAMES,
        payload
    }
}

export function searchByName(payload){
    return async (dispatch)=>{
        try{
            const res = await axios.get(`http://localhost:3001/games?name=${payload}`)
            dispatch({
                type: SEARCH_GAMES,
                payload: res.data
            })
        }catch(err){return err}
    }
}