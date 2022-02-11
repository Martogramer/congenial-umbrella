/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from 'react-router-dom';

const Landing=()=> {
    return (
        <div>
            <a>Videogames</a><br/>
            <Link to='/games'><button>Home</button></Link>
        </div>
    );
}
export default Landing;