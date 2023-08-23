import './ImageShow.css'
import ImageShow from "./ImageShow";

function ImageList({images}){

    const renderedImages = images.map((image) =>{
        return <ImageShow resim={image.urls.small} key={image.id}/>
    })

    return <div className='image-list'>{renderedImages}</div>
}
export default ImageList;