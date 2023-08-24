import { useEffect, useState } from "react";
import { fetchCats } from "../CatApi-service";
import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Loader } from "../components/Loader/Loader";
import SortGallery from "../components/SortGallery/SortGallery";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import { removeCatFromLocalStorage, saveActionToLocalStorage, saveCatToLocalStorage } from "../storage-service";

const initialParams = {
    limit: '10',
    has_breeds: '1',
}

export const GalleryPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [queryParams, setQueryParams] = useState(initialParams);
    const [catsList, setCatsList] = useState([]);


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

    const handleQueryParams = (type, value) => {
        const newParam = {[type]: value};
        console.log('newParam',newParam);
        setQueryParams({...queryParams, ...newParam});
    }

    const addToFav = (catInfo) => {
        saveCatToLocalStorage('Favorites', catInfo);
    saveActionToLocalStorage('Favorites', catInfo.id);
    }
    const removeFromFav = (catInfo) => {
        removeCatFromLocalStorage('Favorites', catInfo);
    saveActionToLocalStorage('Favorites', catInfo.id, 'remove');
    }

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'gallery'} />
                <SortGallery handleQueryParams={handleQueryParams}/>
                {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
                {loading && <Loader loading={loading}/>}
                {!loading && catsList && <GridGallery cats={catsList} fav={true} addToFav={addToFav} removeFromFav={removeFromFav}></GridGallery>}
            </ContentSection>
        </>
    )
}