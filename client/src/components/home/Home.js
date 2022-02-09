import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import { getGames, loadingLoad } from '../../actions';
import Filter from '../filter/Filter';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const Videogames=()=>{
    let games=useSelector((state)=>state.games)
    //let loading=useSelector((state)=>state.loading)
    //const [videogames, setVideogames]=useState([]);

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const [gamesXPage]=useState(15)

    const indexOfLastGame = currentPage * gamesXPage
    const indexOfFirstGame = indexOfLastGame - gamesXPage
    const currentGame = games.slice(indexOfFirstGame, indexOfLastGame)

    const pagination=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getGames())
        dispatch(loadingLoad(true))  // o seteado en true
    }, [])

    const handleReaload=(a)=>{
        a.preventDefault()
        dispatch(getGames())
        dispatch(loadingLoad(true))
    }

    return (
        <div>
            <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
            <button onClick={a=>{handleReaload(a)}}>Tezt</button>
        
            <div>
                {currentGame.map((game)=>{
                    return <Link key={game.id} to={`/games/${game.id}`}>
                        <Card name={game.name}
                            image={game.background_image}
                            genres={(game.id.length > 7) ? game.genres.map(a=>a.name) : game.genres}/>
                    </Link>
                })}
            </div>
            
            <div>
                <Pagination gamesXPage={gamesXPage}
                            games={games.length}
                            pagination={pagination}
                            currentPage={currentPage}/>
            </div>

        </div>
    )
}
export default Videogames