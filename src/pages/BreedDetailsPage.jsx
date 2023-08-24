import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentSection from "../components/ContentSection/ContentSection";
import { Loader } from "../components/Loader/Loader";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import {fetchBreedDetails, fetchCats} from '../CatApi-service';
import { BreedDetails } from "../components/BreedDetails/BreedDetails";
import { SlideSwiper } from "../components/SlideSwiper/SlideSwiper";



export const BreedDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [breedDetails, setBreedDetails] = useState();
    const [breedImages, setBreedImages] = useState();
    const { breedId } = useParams();

    console.log(breedId);
    useEffect(() => {
        async function getBreedDetails() {
            try {
                setLoading(true);
                setError(false);
                const [breedInfo] = await fetchBreedDetails(breedId);
                const breedImg = await fetchCats({breed_ids: breedId, limit: '5'});
                setBreedDetails(...breedInfo.breeds);
                setBreedImages(breedImg);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getBreedDetails()}
    ,[breedId])
   
    console.log(breedDetails);
    console.log(breedImages);


    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'breeds'} />
                {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
                {loading && <Loader loading={loading}/>}
                {breedImages && <SlideSwiper images={breedImages} />}
                {breedDetails && <BreedDetails breedInfo={breedDetails} breedImages={breedImages}/>}
            </ContentSection>
        </>
    )
}