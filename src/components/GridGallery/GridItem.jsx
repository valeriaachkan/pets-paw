import { BreedLink, BreedName, FavButton, Gallery, GalleryItem, Image, Wrapper } from "./GridGallery.styled"
import { ReactComponent as LikedIcon}from '../../assets/fav-white.svg';
import { ReactComponent as LikeIcon}from '../../assets/fav-20.svg';
import { useState } from "react";


const GridItem = ({cat, breed, fav, addToFav, removeFromFav}) => {
const [isLiked, setIsLiked] = useState(false);

const handleClickOnFavButton = (cat) => {
    if(!isLiked) {
        addToFav( cat);
        setIsLiked(true);
        return;
    } 
    removeFromFav( cat);
    setIsLiked(false);
}

    return(
 <GalleryItem key={cat.id}>
                    {breed && cat.breeds.map(breed => (<BreedLink key={breed.id} to={`/breeds/${breed.id}`}>
                        <Image src={cat.url} alt='Photo of a Cat'/>
                        <Wrapper>
                            <BreedName key={cat.id}>{breed.name}</BreedName>
                        </Wrapper>
                    </BreedLink>))}
                    
                    {fav && <><Image src={cat.url} alt='Photo of a Cat'/>
                        <Wrapper>
                            <FavButton onClick={()=>handleClickOnFavButton(cat)}>
                                {isLiked && <LikedIcon/>}
                                {!isLiked && <LikeIcon/>}
                            </FavButton>
                        </Wrapper></>}
                </GalleryItem>
    )
}

export {GridItem};