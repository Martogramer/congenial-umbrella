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
    }, [])

    const gameOne = useSelector(state=>state.game)

return(
    <div>
        {!loadingLoad ?
            <div className={style.container}>
                <img src={gameOne.background_image} alt=""/>
                <div className={style.content}>
                <h1>{gameOne.name}</h1>
                <p>{gameOne.description}</p>

                </div>
            </div>
            : <Loading />
        }
    </div>
)
}
export default GameDetail