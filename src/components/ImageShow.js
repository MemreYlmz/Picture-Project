import { useState } from 'react';
import { useEffect } from 'react';
import './Image.css'
function ImageShow({resim}){

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);// isActive durumunu tersine çevir
    };

 
    return(
        
            <div className={`image-show ${isActive ? 'active' : ''}`} onClick={handleClick}>
                <img src={resim} className="custom-image "/>
            </div>
       
    )   
}
export default ImageShow;