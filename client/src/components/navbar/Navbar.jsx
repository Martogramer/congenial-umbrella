import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";

const Navbar=()=>{
    return(
        <div>
            <div>
                <div>
                    <Link to={'/games'}>Games</Link>
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </div>
    )
}
export default Navbar;