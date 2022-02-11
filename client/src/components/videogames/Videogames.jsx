import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import styles from './Games.module.css'

import { getGames, loadingLoad } from '../../redux/actions/index';
import Filter from '../filter/Filter';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

function Videogames(){

    const dispatch = useDispatch()
    const games = useSelector(store => store.games)
    

    return (
        <div className={styles.container}>

        asdasf
        <button onClick={() => dispatch(getGames())}>games</button>

        <div className={styles.card}>
        {
            games.map(game=>(
                <Card key={game.id}
                        name={game.name}
                        image={game.background_image}
                        genres={game.genres.map(g=>g.name)}
                        />
                ))
            }    
        </div>

            


        </div>
    )
}
export default Videogames;