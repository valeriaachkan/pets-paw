import { Gallery } from "./GridGallery.styled"
import { GridItem } from "./GridItem";


const GridGallery = ({cats, breed, fav, addToFav,removeFromFav, liked}) => {

    return(
        <Gallery $gridLength={cats.length}>
            {cats.map(cat =><GridItem key={cat.id} cat={cat} breed={breed} fav={fav} addToFav={addToFav} removeFromFav={removeFromFav} liked={liked}/>)}
        </Gallery>
    )
}

export {GridGallery};