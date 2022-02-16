import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import {useDispatch, useSelector} from 'react-redux';
import { getGames } from '../../redux/actions/index';
import styles from './Navbar.module.css'


const Navbar=()=>{
    const dispatch = useDispatch()
    const games = useSelector(store => store.games)

    return(
        <div className={styles.navbar}>
            <div className={styles.navbar_links}>
                <div className={styles.button}>
                    <Link to={'/games'}><button onClick={() => dispatch(getGames())}>games</button></Link>
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </div>
    )
}
export default Navbar;