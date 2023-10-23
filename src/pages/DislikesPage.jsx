import { useSelector } from "react-redux";
import {ContentSection} from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { MainSection } from "../components/MainSection/MainSection";
import { MenuSection } from "../components/MenuSection/MenuSection";
import { Notification } from "../components/Notification/Notification";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import {ToolBar} from "../components/ToolBar/ToolBar";
import { selectDislikedCats } from "../redux/selectors";


export const DislikesPage = () => {
    const dislikedCats = useSelector(selectDislikedCats);

    return (
        <PageWrapper>
            <MenuSection/>
            <MainSection>
                <ContentSection>
                    <ToolBar title={'dislikes'} />
                    {dislikedCats.length === 0 && <Notification notFound={true}/>}
                    {dislikedCats && <GridGallery cats={dislikedCats} fav={false} addToFav={() => {}} removeFromFav={() => {}} liked={true}></GridGallery>}
                </ContentSection>
            </MainSection>
        </PageWrapper>
    )
}