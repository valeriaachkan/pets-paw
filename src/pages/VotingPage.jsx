import ContentSection from "../components/ContentSection/ContentSection"
import { Subheader } from "../components/Subheader/Subheader"
import { fetchCatToVote } from "../services/catApi-service";
import { useEffect, useState } from "react";
import { saveCatToLocalStorage, saveActionToLocalStorage, loadActionsFromLocalStorage} from '../services/localStorage-service';
import { ActionsSection } from '../components/ActionsSection/ActionsSection';
import { ImageOverlay } from '../components/ImageOverlay/ImageOverlay';
import { ReactionButtons } from '../components/ReactionButtons/ReactionButtons';
import { Loader } from "../components/Loader/Loader";
import ToolBar from "../components/ToolBar/ToolBar";
import { Notification } from "../components/Notification/Notification";


export const VotingPage = () => {
    const [catInfo, setCatInfo] = useState(null);
    const [isVoted, setIsVoted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const actionsHistory = loadActionsFromLocalStorage();
    
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
    saveActionToLocalStorage(type, catInfo.id, 'add');
    setIsVoted(!isVoted);
}
    return (
        <>
            <Subheader/>
            <ContentSection>
                <ToolBar title={'voting'}/>
                {error && <Notification error={true}/>}
                <ReactionButtons catInfo={catInfo} onButtonClick={onReactionButtonClick}>{loading && <Loader loading={loading}/>}{catInfo && !loading && <ImageOverlay url={catInfo.url}/>}</ReactionButtons>
                {actionsHistory && <ActionsSection actions={actionsHistory}/>}
            </ContentSection>
        </>
    )
}

