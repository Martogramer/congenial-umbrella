import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getGames } from '../../actions';
import {Link} from 'react-router-dom';


const Home=()=>{
    const dispatch= useDispatch()
    const games = useSelector((state)=>state.games)

    useEffect (()=>{
        dispatch(getGames())
    })

    function handleClick(e) {
        e.preventDefault();
        dispatch(getGames())
    }

    
    return (
        <div>
            <Link to='/'><a>volver</a></Link>
            <button onClick={e=> {handleClick(e)}}>
                sarasa
            </button>
            <h1>PARATUSALSA</h1>
        </div>
    )

}
export default Home;
