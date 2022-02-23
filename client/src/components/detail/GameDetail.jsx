import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGamesById, loading} from '../../redux/actions/index'
import Loading from '../loading/Loading'
import style from './GameDetail.module.css'

const GameDetail=()=>{

    const dispatch=useDispatch()
    const loadingLoad=useSelector((state)=>state.loading)
    const {id}=useParams()

    useEffect(()=>{
        dispatch(getGamesById(id))
        dispatch(loading(true))
    }, [dispatch, id])

    const game = useSelector((store)=>store.game)

return(
    <div className={style.wrapper}>
        <Link to={'/games'}>back</Link>
        {console.log(game)}


        {!loadingLoad ?
            <div className={style.container}>
                <img src={game.background_image} alt=""/>
                <div className={style.content}>
                    <h1>{game.name}</h1>
                    <p>{game.description}</p>
                    <div className={style.content_detail}>
                            <p><label>Released: </label>{game.released}</p>
                            <p><label>Rating: </label>{game.rating}</p>
                            {
                            (typeof game.platforms === 'object')
                            ? <p><label>Platforms: </label>{game.platforms.join(', ')}</p>
                            : <p><label>Platforms: </label>{game.platforms}</p>
        }
                            {
                            (!game.genres) 
                            ?  <p><label>Genres: </label>{game.genres}</p>
                            :  <p><label>Genres: </label>{game.genres.map((g) => g.name).join(', ')}</p>
        }

                    </div>
                </div>
            </div>
            : <Loading />
        }
    </div>
)
}
export default GameDetail