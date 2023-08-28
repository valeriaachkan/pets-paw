import {ContentSection} from "../components/ContentSection/ContentSection"
import { fetchCatToVote } from "../services/catApi-service";
import { useEffect, useState } from "react";
import { saveCatToLocalStorage, saveActionToLocalStorage, loadActionsFromLocalStorage} from '../services/localStorage-service';
import { ActionsSection } from '../components/ActionsSection/ActionsSection';
import { ImageOverlay } from '../components/ImageOverlay/ImageOverlay';
import { ReactionButtons } from '../components/ReactionButtons/ReactionButtons';
import { Loader } from "../components/Loader/Loader";
import {ToolBar} from "../components/ToolBar/ToolBar";
import { Notification } from "../components/Notification/Notification";
import {PageWrapper} from '../components/PageWrapper/PageWrapper';
import {MenuSection} from '../components/MenuSection/MenuSection';
import {MainSection} from '../components/MainSection/MainSection';
import MediaQuery from 'react-responsive';

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
        <PageWrapper>
            <MenuSection/>
            <MainSection>
            <ContentSection>
                <ToolBar title={'voting'}/>
                {error && <Notification error={true}/>}
                <ReactionButtons catInfo={catInfo} onButtonClick={onReactionButtonClick}>
                    <MediaQuery maxWidth={767}>
                        {loading && <Loader loading={loading} size={50}/>}
                    </MediaQuery>
                    <MediaQuery minWidth={768}>
                        {loading && <Loader loading={loading} size={100}/>}
                    </MediaQuery>
                    {catInfo && !loading && <ImageOverlay url={catInfo.url}/>}
                </ReactionButtons>
                {actionsHistory && <ActionsSection actions={actionsHistory}/>}
            </ContentSection>
            </MainSection>
        </PageWrapper>
    )
}

