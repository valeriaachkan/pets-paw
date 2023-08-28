import { useEffect, useState } from "react";
import { fetchCats } from "../services/catApi-service";
import {ContentSection} from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Loader } from "../components/Loader/Loader";
import { Notification } from "../components/Notification/Notification";
import {SorterBreeds} from "../components/SorterBreeds/SorterBreeds";
import {ToolBar} from "../components/ToolBar/ToolBar";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { MenuSection } from "../components/MenuSection/MenuSection";
import { MainSection } from "../components/MainSection/MainSection";

const initialParams = {
    limit: '5',
    has_breeds: '1',
}

export const BreedsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [queryParams, setQueryParams] = useState(initialParams);
    const [catsList, setCatsList] = useState([]);
    const [isDefSort, setIsDefSort] = useState(true);

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
        getCats();
    }
    ,[queryParams])

    const handleQueryParams = (type, value) => {
        const newParam = {[type]: value};
        setQueryParams({...queryParams, ...newParam});
    }

    const handleSortClick = (order) => {
       return order === 'default' ? setIsDefSort(true) : setIsDefSort(false);
    }


    return (
        <PageWrapper>
            <MenuSection/>
            <MainSection>
                <ContentSection>
                    <ToolBar title={'breeds'} >
                        <SorterBreeds handleQueryParams={handleQueryParams} handleSortClick={handleSortClick} isDefSort={isDefSort}/>
                    </ToolBar>
                    {error && <Notification error={true}/>}
                    {loading && <Loader loading={loading}/>}
                    {!loading && catsList.length === 0 && <Notification notFound={true}/>}
                    {!loading && catsList && isDefSort && <GridGallery cats={catsList} breed={true}></GridGallery>}
                    {!loading && catsList && !isDefSort &&<GridGallery cats={[...catsList].reverse()} breed={true}></GridGallery>}
                </ContentSection>
            </MainSection>
        </PageWrapper>
    )
}