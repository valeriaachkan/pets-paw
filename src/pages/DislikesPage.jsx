import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Notification } from "../components/Notification/Notification";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import { loadCatsFromLocalStorage} from "../services/localStorage-service";


export const DislikesPage = () => {
    const catsList = loadCatsFromLocalStorage('Dislikes') ?? [];

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'dislikes'} />
                {catsList.length === 0 && <Notification notFound={true}/>}
                {catsList && <GridGallery cats={catsList} fav={false} addToFav={() => {}} removeFromFav={() => {}} liked={true}></GridGallery>}
            </ContentSection>
        </>
    )
}