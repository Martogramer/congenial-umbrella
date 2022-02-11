import axios from 'axios';

export const GET_GAMES = 'GET_GAMES'
export const LOAD_GAMES = 'LOAD_GAMES'


export const getGames=()=>async(dispatch)=>{
    try {
        const res = await fetch('http://localhost:3001/games')
        const data = res.json()
        dispatch({
            type: GET_GAMES,
            payload: data
        })
    } catch (err){return err}
}

export function loadingLoad(payload){
    return{
        type: LOAD_GAMES,
        payload
    }
}