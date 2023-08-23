import './SearchBar.css'
import { useState } from "react"


function SearchBar({onay}){
    const [term,setTerm]=useState("")
    const handleClick = (event)=>{
        event.preventDefault()
        onay(term)
    }
    const handleChange = (event)=>{
        setTerm(event.target.value)
        onay(term)
    }
    return <div className="search-bar">
        <form onSubmit={handleClick}>
            <label>Enter the text</label><br></br>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
}
export default SearchBar;