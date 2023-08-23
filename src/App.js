import { useState } from "react"
import ImageList from "../src/components/ImageList"
import ImageShow from "../src/components/ImageShow"
import SearchBar from "../src/components/SearchBar"
import searchİmages from "./api"

function App(){
    const [images,setImages]=useState([])
    const handleChildClick = async(term)=>{
        const result = await searchİmages(term)
        //console.log(result)
        setImages(result)
    }

    return <div className="ana-hat">
        <SearchBar  onay={handleChildClick}/>
        <ImageList images={images} />
    </div>
}
export default App;