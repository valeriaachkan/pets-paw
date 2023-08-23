import { useEffect, useState } from "react";
import { fetchCats } from "../CatApi-service";
import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Loader } from "../components/Loader/Loader";
import SortBreeds from "../components/SortBreeds/SortBreeds";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";

const initialParams = {
    limit: '10',
}

export const Breeds = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [queryParams, setQueryParams] = useState(initialParams);
    const [catsList, setCatsList] = useState([]);

    const handleQueryParams = (type, value) => {
        const newParam = {[type]: value};
        console.log('newParam',newParam);
        setQueryParams({...queryParams, ...newParam});
    }

    useEffect(() => {
        async function getCats() {
            try {
                setLoading(true);
                setError(false);
                const cats = await fetchCats(queryParams);
                setCatsList(cats);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCats()}
    ,[queryParams])
    console.log(queryParams);

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'breeds'} >
                    <SortBreeds handleQueryParams={handleQueryParams}/>
                </ToolBar>
                {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
                {loading && <Loader loading={loading}/>}
                <GridGallery cats={catsList}></GridGallery>
            </ContentSection>
        </>
    )
}