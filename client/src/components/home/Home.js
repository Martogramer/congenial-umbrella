import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
import { getGames } from '../../actions';
import {Link} from 'react-router-dom';
>>>>>>> 5bb1eac219e4adf986593038384435e04e67fe19

import { getGames, loadingLoad } from '../../actions';

<<<<<<< HEAD

Videogames=()=>{
    let games=useSelector((state)=>state.games)
    let loading=useSelector((state)=>state.loading)
    const [videogames, setVideogames]=useState([]);
=======
const Home=()=>{
    const dispatch= useDispatch()
    const games = useSelector((state)=>state.games)

    useEffect (()=>{
        dispatch(getGames())
    })
>>>>>>> 5bb1eac219e4adf986593038384435e04e67fe19

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const [gamesXPage]=useState(15)

    const indexOfLastGame = currentPage * gamesXPage
    const indexOfFirstGame = indexOfLastGame - gamesXPage
    const currentGame = games.slice(indexOfFirstGame, indexOfLastGame)

    const pagination=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

<<<<<<< HEAD
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
=======
    
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
>>>>>>> 5bb1eac219e4adf986593038384435e04e67fe19
