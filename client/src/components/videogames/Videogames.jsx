import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './Games.module.css'

import { getGames, loadingLoad } from '../../redux/actions/index';
import Filter from '../filter/Filter';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import Navbar from '../navbar/Navbar';

function Videogames() {

    const dispatch = useDispatch()
    const games = useSelector(store => store.games)

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesXPage] = useState(6);
    const indexOfLastGame = currentPage * gamesXPage;
    const indexOfFirstGame = indexOfLastGame - gamesXPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.card}>
                {
                    currentGames?.map(game => (
                        <Card key={game.id}
                            name={game.name}
                            image={game.background_image}
                            genres={game.genres.map(g => g.name)}
                        />
                    ))
                }
            </div>
            <Pagination gamesXPage={gamesXPage} allGames={games.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}
export default Videogames;