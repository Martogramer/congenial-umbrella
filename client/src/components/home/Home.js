import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import { getGames, loadingLoad } from '../../actions';


Videogames=()=>{
    let games=useSelector((state)=>state.games)
    let loading=useSelector((state)=>state.loading)
    const [videogames, setVideogames]=useState([]);

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
        dispatch(loadingLoad())  // o seteado en true
    }, [])


    return (
        <div>

        



        </div>
    )
}