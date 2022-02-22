import React from "react";
import styles from './Pagination.module.css'

const Pagination=({gamesXPage, allGames, paginate, currentPage})=>{
    const pageNumber = []
    for(let i=1; i< Math.ceil(allGames / gamesXPage); i++){
        pageNumber.push(i)
    }

    return(
        <div className={styles.container}>
            <ul className={styles.pagination}>
                {pageNumber ?
                pageNumber.map(num =>(
                    <li key={num} className={styles.page_numbers}>
                        <a href='#top' onClick={()=>paginate(num)} id={(currentPage === num)}>{num}</a>
                    </li>
                )) : null }
            </ul>
        </div>
    )
}
export default Pagination