import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import { getGames, loadingLoad } from '../../actions';
import Filter from '../filter/Filter';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

function Videogames(){

    const dispatch = useDispatch()
    const games = useSelector(store => store.games)
    console.log(games)

    return (
        <div>

        asdasf
        <button onClick={() => dispatch(getGames())}>games</button>
        
        </div>
    )
}
export default Videogames;