import { BreedName, Gallery, GalleryItem, Image, Wrapper } from "./GridGallery.styled"

const GridGallery = ({cats}) => {
    return(
        <Gallery $gridLength={cats.length}>
            {cats.map(cat => (
                <GalleryItem key={cat.id}>
                    <Image src={cat.url} alt='Photo of a Cat'/>
                    <Wrapper>
                        {cat.breeds.length > 0 && cat.breeds.map(breed => (<BreedName key={cat.id}>{breed.name}</BreedName>))}
                        {cat.breeds.length === 0 && <BreedName>Unknown breed</BreedName>}
                    </Wrapper>
                </GalleryItem>))}
        </Gallery>
    )
}

export {GridGallery};

