import {ContentSection} from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { MainSection } from "../components/MainSection/MainSection";
import { MenuSection } from "../components/MenuSection/MenuSection";
import { Notification } from "../components/Notification/Notification";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import {ToolBar} from "../components/ToolBar/ToolBar";
import { loadCatsFromLocalStorage} from "../services/localStorage-service";


export const DislikesPage = () => {
    const catsList = loadCatsFromLocalStorage('Dislikes') ?? [];

    return (
        <PageWrapper>
            <MenuSection/>
            <MainSection>
                <ContentSection>
                    <ToolBar title={'dislikes'} />
                    {catsList.length === 0 && <Notification notFound={true}/>}
                    {catsList && <GridGallery cats={catsList} fav={false} addToFav={() => {}} removeFromFav={() => {}} liked={true}></GridGallery>}
                </ContentSection>
            </MainSection>
        </PageWrapper>
    )
}