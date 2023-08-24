import { useState } from "react";
import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import { loadCatsFromLocalStorage, removeCatFromLocalStorage, saveActionToLocalStorage } from "../storage-service";


export const FavoritesPage = () => {
    const [catsList, setCatsList] = useState(loadCatsFromLocalStorage('Favorites') ?? []);

    const removeFromFav = (catInfo) => {
        removeCatFromLocalStorage('Favorites', catInfo);
    saveActionToLocalStorage('Favorites', catInfo.id, 'remove');
    const cats = loadCatsFromLocalStorage('Favorites');
        setCatsList(cats);
    }

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'favorites'} />
                {catsList && <GridGallery cats={catsList} fav={true} addToFav={() => {}} removeFromFav={removeFromFav} liked={true}></GridGallery>}
            </ContentSection>
        </>
    )
}