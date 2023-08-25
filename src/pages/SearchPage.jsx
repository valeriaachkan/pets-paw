import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCats } from "../services/catApi-service";
import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Loader } from "../components/Loader/Loader";
import { Notification } from "../components/Notification/Notification";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import {selectValues} from '../components/Select/selectValues';


export const SearchPage = () => {
    const { query } = useParams();
    const [catsList, setCatsList] = useState([]);
    const [searchQueryIds, setSearchQueryIds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        function findBreedIdByQuery(data, query) {
            if(query === undefined) {
                return;
            }
            
            let matchedIds = [];
            const breeds = data.breeds;
            breeds.forEach(({key, label}) => (label.toLowerCase().includes(query.toLowerCase()) ? matchedIds.push(key) : null));
            return matchedIds;
        }
        setSearchQueryIds(findBreedIdByQuery(selectValues, query));
    },[query])


useEffect(()=>{
    async function searchCatsByQuery() {
        if(searchQueryIds.length === 0) {
            setCatsList([]);
            return;
        }
        try {
            const searchParams = {
                limit: '20',
                breed_ids: searchQueryIds,
            }
            setLoading(true);
            setError(false);
            const cats = await fetchCats(searchParams);
            setCatsList(cats);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    searchCatsByQuery();
},[searchQueryIds])

    return (
        <>
            <Subheader value={query}/>
            <ContentSection>
                <ToolBar title={'search'} />
                {error && <Notification error={true}/>}
                {query && <p style={{color: '#8C8C8C', fontSize: '20px', marginBottom: '20px'}}>Search results for: <span style={{color: '#1D1D1D', fontWeight: '500'}}>{query}</span></p>}
                {loading && <Loader loading={loading}/>}
                {!loading && catsList.length === 0 && <Notification notFound={true}/>}
                {!loading && catsList && <GridGallery cats={catsList} breed={true} addToFav={() => {}} removeFromFav={() => {}}></GridGallery>}
            </ContentSection>
        </>
    )
}