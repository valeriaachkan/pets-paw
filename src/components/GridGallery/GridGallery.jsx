import { Link } from "react-router-dom";
import { BreedLink, BreedName, Gallery, GalleryItem, Image, Wrapper } from "./GridGallery.styled"

const GridGallery = ({cats}) => {
    return(
        <Gallery $gridLength={cats.length}>
            {cats.map(cat => (
                <GalleryItem key={cat.id}>
                    {cat.breeds.map(breed => (<BreedLink to={`/breeds/${breed.id}`}>
                        <Image src={cat.url} alt='Photo of a Cat'/>
                        <Wrapper>
                            <BreedName key={cat.id}>{breed.name}</BreedName>
                        </Wrapper>
                    </BreedLink>))}
                    
                </GalleryItem>))}
        </Gallery>
    )
}

export {GridGallery};

