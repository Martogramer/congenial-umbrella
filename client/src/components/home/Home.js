import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getGames } from '../../actions';


export default function Home (){
    const dispatch= useDispatch()
    const games = useSelector((state)=>state.games)

    useEffect (()=>{
        dispatch(getGames())
    }, [])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getGames())
    }


    return (
        <div>
            <button onClick={handleClick()}>
                Refresh
            </button>
        </div>
    )

}

