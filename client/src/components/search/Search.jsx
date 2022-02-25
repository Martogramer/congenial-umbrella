import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {loading, searchByName} from '../../redux/actions/index'
import styles from './Search.module.css'


const Search=()=>{
    const dispatch=useDispatch()
    const [name, setName] = useState('')

    const handleInput=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit=(e)=>{
        dispatch(searchByName(name))
        dispatch(loading(true))
        setName('')
    }

    
    return(
        <div className={styles.search_container}>
            <input type="text" placeholder='Search' value={name} onChange={(e)=>handleInput(e)} />
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )
}
export default Search;