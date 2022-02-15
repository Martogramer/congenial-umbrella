import React from "react";

const Pagination=({gamesXPage, allGames, paginate})=>{
    const pageNumber = []
    for(let i=0; i< Math.ceil(allGames / gamesXPage); i++){
        pageNumber.push(i+1);
    }

    return(
        <nav>
            <ul>
                {pageNumber.length > 1 &&
                pageNumber.map(number =>(
                    <li key={number}>
                        <button onClick={()=>paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination