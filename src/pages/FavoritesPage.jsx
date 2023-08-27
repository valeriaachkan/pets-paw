import { useState } from "react";
import { ActionsSection } from "../components/ActionsSection/ActionsSection";
import {ContentSection} from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Notification } from "../components/Notification/Notification";
import { Subheader } from "../components/Subheader/Subheader"
import {ToolBar} from "../components/ToolBar/ToolBar";
import { loadCatsFromLocalStorage, removeCatFromLocalStorage, saveActionToLocalStorage } from "../services/localStorage-service";


export const FavoritesPage = () => {
    const [catsList, setCatsList] = useState(loadCatsFromLocalStorage('Favorites') ?? []);
    const [actions, setActions] = useState([]);

    const removeFromFav = (catInfo) => {
        removeCatFromLocalStorage('Favorites', catInfo);
        const cats = loadCatsFromLocalStorage('Favorites');
        setCatsList(cats);

        setActions([formNewAction(catInfo.id), ...actions]);
        saveActionToLocalStorage('Favorites', catInfo.id, 'remove');
    }

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'favorites'} />
                {catsList.length === 0 && <Notification notFound={true}/>}
                {catsList.length > 0 && <GridGallery cats={catsList} fav={true} addToFav={() => {}} removeFromFav={removeFromFav} liked={true}></GridGallery>}
                <div style={{height: '40px'}}></div>
                {actions.length > 0 && <ActionsSection actions={actions}/>}
            </ContentSection>
        </>
    )
}

function formNewAction(id) {
    const date = new Date();
	const time = date.toLocaleTimeString().slice(0, 5);
    return {type: 'Favorites', id , action: 'remove', time }
}