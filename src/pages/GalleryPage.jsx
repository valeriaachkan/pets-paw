import { useEffect, useState } from "react";
import { fetchCats } from "../services/catApi-service";
import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Loader } from "../components/Loader/Loader";
import { Modal } from "../components/Modal/Modal";
import { Notification } from "../components/Notification/Notification";
import SortGallery from "../components/SortGallery/SortGallery";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import { removeCatFromLocalStorage, saveActionToLocalStorage, saveCatToLocalStorage } from "../services/localStorage-service";

const initialParams = {
    limit: '5',
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

    const handleQueryParams = (type, value) => {
        const newParam = {[type]: value};
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

    const handleUpdateClick = () => {
        setQueryParams({...queryParams});
    }

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'gallery'}>
                    <Modal />
                </ToolBar>
                <SortGallery handleQueryParams={handleQueryParams} handleUpdateClick={handleUpdateClick}/>
                {error && <Notification error={true}/>}
                {loading && <Loader loading={loading}/>}
                {!loading && catsList.length === 0 && <Notification notFound={true}/>}
                {!loading && catsList && <GridGallery cats={catsList} fav={true} addToFav={addToFav} removeFromFav={removeFromFav}></GridGallery>}
            </ContentSection>
        </>
    )
}