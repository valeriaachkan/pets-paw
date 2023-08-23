import ContentSection from "../components/ContentSection/ContentSection"
import { Subheader } from "../components/Subheader/Subheader"
import { fetchCatToVote } from "../CatApi-service";
import { useEffect, useState } from "react";
import { saveCatToLocalStorage, saveActionToLocalStorage, loadActionsFromLocalStorage} from '../storage-service';
import { ActionsSection } from '../components/ActionsSection/ActionsSection';
import { ImageOverlay } from '../components/ImageOverlay/ImageOverlay';
import { ReactionButtons } from '../components/ReactionButtons/ReactionButtons';
import { Loader } from "../components/Loader/Loader";


export const Voting = () => {
    const [catInfo, setCatInfo] = useState(null);
    const [isVoted, setIsVoted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const actionsHistory = loadActionsFromLocalStorage();
    console.log(actionsHistory)
    
useEffect(() => {
    async function getCatToVote() {
        try {
            setLoading(true);
            setError(false);
            const cat = await fetchCatToVote();
            setCatInfo(...cat);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    getCatToVote()}
,[isVoted])


const onReactionButtonClick = (type, catInfo) => {
    saveCatToLocalStorage(type, catInfo);
    saveActionToLocalStorage(type, catInfo.id);
    setIsVoted(!isVoted);
}
    return (
        <>
            <Subheader/>
            <ContentSection pageTitle={'voting'}>
                {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
                <ReactionButtons catInfo={catInfo} onButtonClick={onReactionButtonClick}>{loading && <Loader loading={loading}/>}{catInfo && !loading && <ImageOverlay url={catInfo.url}/>}</ReactionButtons>
                {actionsHistory && <ActionsSection actions={actionsHistory}/>}
            </ContentSection>
        </>
    )
}

