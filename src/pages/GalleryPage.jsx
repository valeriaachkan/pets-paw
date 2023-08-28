import { useEffect, useState } from "react";
import { fetchCats } from "../services/catApi-service";
import {ContentSection} from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Loader } from "../components/Loader/Loader";
import { UploadModal } from "../components/UploadModal/UploadModal";
import { Notification } from "../components/Notification/Notification";
import {SorterGallery} from "../components/SorterGallery/SorterGallery";
import {ToolBar} from "../components/ToolBar/ToolBar";
import { removeCatFromLocalStorage, saveActionToLocalStorage, saveCatToLocalStorage } from "../services/localStorage-service";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { MenuSection } from "../components/MenuSection/MenuSection";
import { MainSection } from "../components/MainSection/MainSection";

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
        saveActionToLocalStorage('Favorites', catInfo.id, 'add');
    }
    const removeFromFav = (catInfo) => {
        removeCatFromLocalStorage('Favorites', catInfo);
        saveActionToLocalStorage('Favorites', catInfo.id, 'remove');
    }

    const handleUpdateClick = () => {
        setQueryParams({...queryParams});
    }

    return (
        <PageWrapper>
            <MenuSection/>
            <MainSection>
            <ContentSection>
                <ToolBar title={'gallery'}>
                    <UploadModal />
                </ToolBar>
                <SorterGallery handleQueryParams={handleQueryParams} handleUpdateClick={handleUpdateClick}/>
                {error && <Notification error={true}/>}
                {loading && <Loader loading={loading}/>}
                {!loading && catsList.length === 0 && <Notification notFound={true}/>}
                {!loading && catsList && <GridGallery cats={catsList} fav={true} addToFav={addToFav} removeFromFav={removeFromFav}></GridGallery>}
            </ContentSection>
            </MainSection>
        </PageWrapper>
    )
}