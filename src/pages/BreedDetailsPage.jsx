import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ContentSection} from "../components/ContentSection/ContentSection";
import { Loader } from "../components/Loader/Loader";
import { Subheader } from "../components/Subheader/Subheader"
import {ToolBar} from "../components/ToolBar/ToolBar";
import {fetchBreedDetails, fetchCats} from '../services/catApi-service';
import { BreedDetailsContainer } from "../components/BreedDetailsContainer/BreedDetailsContainer";
import { SlideSwiper } from "../components/SlideSwiper/SlideSwiper";
import { Notification } from "../components/Notification/Notification";



export const BreedDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [breedDetails, setBreedDetails] = useState();
    const [breedImages, setBreedImages] = useState();
    const { breedId } = useParams();

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

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'breeds'} />
                {error && <Notification error={true}/>}
                {loading && <Loader loading={loading}/>}
                {breedImages && <SlideSwiper images={breedImages} />}
                {breedDetails && <BreedDetailsContainer breedInfo={breedDetails} breedImages={breedImages}/>}
            </ContentSection>
        </>
    )
}