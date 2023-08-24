import ContentSection from "../components/ContentSection/ContentSection"
import { GridGallery } from "../components/GridGallery/GridGallery";
import { Subheader } from "../components/Subheader/Subheader"
import ToolBar from "../components/ToolBar/ToolBar";
import { loadCatsFromLocalStorage} from "../storage-service";


export const LikesPage = () => {
    const catsList = loadCatsFromLocalStorage('Likes') ?? [];

    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'likes'} />
                {catsList && <GridGallery cats={catsList} fav={false} addToFav={() => {}} removeFromFav={() => {}} liked={true}></GridGallery>}
            </ContentSection>
        </>
    )
}