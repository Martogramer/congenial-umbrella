import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {searchByName} from '../../redux/actions/index'


const Search=()=>{
    const dispatch=useDispatch()
    const [name, setName] = useState('')

    const handleInput=(e)=>{
        setName(e.target.value)
    }

    const handleSubmit=(e)=>{
        dispatch(searchByName(name))
        setName('')
    }

    
    return(
        <div>
            <input type="text" placeholder='Search' value={name} onChange={(e)=>handleInput(e)} />
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )
}
export default Search;