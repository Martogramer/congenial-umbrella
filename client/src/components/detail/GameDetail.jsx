import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGamesById, loading} from '../../redux/actions/index'
import Loading from '../loading/Loading'
import style from './GameDetail.module.css'

const GameDetail=()=>{

    const dispatch=useDispatch()
    const loadingLoad=useSelector(state=>state.loading)
    const {id}=useParams()

    useEffect(()=>{
        dispatch(getGamesById(id))
        dispatch(loading(true))
    }, [dispatch, id])

    const gameOne = useSelector(state=>state.game)

return(
    <div className={style.wrapper}>
        <Link to={'/games'}>back</Link>
        {!loadingLoad ?
            <div className={style.container}>
                <img src={gameOne.background_image} alt=""/>
                <div className={style.content}>
                    <h1>{gameOne.name}</h1>
                    <p>{gameOne.description}</p>
                    <div className={style.content_detail}>
                            <p><label>Released: </label>{gameOne.released}</p>
                            <p><label>Rating: </label>{gameOne.rating}</p>
                            {
                            (typeof gameOne.platforms === 'object')
                            ? <p><label>Platforms: </label>{gameOne.platforms.join(', ')}</p>
                            : <p><label>Platforms: </label>{gameOne.platforms}</p>
        }
                            {
                            (!gameOne.genres) 
                            ?  <p><label>Genres: </label>{gameOne.genres}</p>
                            :  <p><label>Genres: </label>{gameOne.genres.map((g) => g.name).join(', ')}</p>
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