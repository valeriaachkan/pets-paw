import { useDispatch, useSelector } from "react-redux";
import { ActionsSection } from "../components/ActionsSection/ActionsSection";
import {ContentSection} from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { MainSection } from "../components/MainSection/MainSection";
import { MenuSection } from "../components/MenuSection/MenuSection";
import { Notification } from "../components/Notification/Notification";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import {ToolBar} from "../components/ToolBar/ToolBar";
import { addAction } from "../redux/actionsSlice";
import { removeCat } from "../redux/catsSlice";
import { selectFavoritedCats } from "../redux/selectors";

export const FavoritesPage = () => {
    const favoritedCats = useSelector(selectFavoritedCats) ;
    const dispatch = useDispatch();

    const removeFromFav = (catInfo) => {
        dispatch(removeCat(catInfo.id))
        dispatch(addAction({type: 'favorites', id: catInfo.id, action:'remove'}))
    }

    return (
        <PageWrapper>
            <MenuSection/>
            <MainSection>
                <ContentSection>
                    <ToolBar title={'favorites'} />
                    {favoritedCats.length === 0 && <Notification notFound={true}/>}
                    {favoritedCats.length > 0 && <GridGallery cats={favoritedCats} fav={true} addToFav={() => {}} removeFromFav={removeFromFav} liked={true}></GridGallery>}
                    <div style={{height: '40px'}}></div>
                    {favoritedCats.length > 0 && <ActionsSection actions={favoritedCats}/>}
                </ContentSection>
            </MainSection>
        </PageWrapper>
    )
}

