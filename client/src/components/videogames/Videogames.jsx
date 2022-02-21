import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './Games.module.css'

import { getGames, loading } from '../../redux/actions/index';
import Filter from '../filter/Filter';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import Navbar from '../navbar/Navbar';
import Loading from '../loading/Loading';





function Videogames() {

    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(getGames())
            dispatch(loading(true))
        }, [dispatch])


        const games = useSelector(store => store.games)
        const loadingLoad = useSelector((state)=>state.loading)


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
            
            {!loadingLoad
                ?
                <div className={styles.card}>
                {
                    currentGames?.map(game => (
                        <Link className={styles.link} key={game.id} to={`/games/${game.id}`}>
                        <Card key={game.id}
                        name={game.name}
                        image={game.background_image}
                        genres={game.genres.map(g => g.name)}
                        /></Link>
                        ))
                }
            </div>
            :
            <Loading />
                    }

            <Pagination gamesXPage={gamesXPage} allGames={games.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}
export default Videogames;