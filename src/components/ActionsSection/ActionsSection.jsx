import { nanoid } from "nanoid";
import MediaQuery from 'react-responsive';
import { ActionItem, ActionList, Id, Text, Time, Wrapper } from "./ActionsSection.styled";
import { ReactComponent as FavIcon }from '../../assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '../../assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '../../assets/dislike-30.svg';


const ActionsSection = ({actions}) => {
    return (
        <ActionList>
            {actions.map(({ type, id, action, time }) =>
            <>
                {action === 'add' && 
                    <>
                    <MediaQuery maxWidth={767}>
                        <ActionItem key={nanoid()}>
                            <Wrapper>
                                <Time>{time}</Time>
                                {type === 'Favorites' ?  <FavIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FF868E'}}/> : type === 'Likes' ? <LikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#97EAB9'}}/> : <DislikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FFD280'}}/>}
                            </Wrapper>
                            <Text>Image ID: <Id>{id}</Id> was added to {type}</Text>
                        </ActionItem>
                    </MediaQuery>
                    <MediaQuery minWidth={768}>
                        <ActionItem key={nanoid()}>
                            <Time>{time}</Time>
                            <Text>Image ID: <Id>{id}</Id> was added to {type}</Text>
                            {type === 'Favorites' ?  <FavIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FF868E'}}/> : type === 'Likes' ? <LikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#97EAB9'}}/> : <DislikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FFD280'}}/>}
                        </ActionItem>
                    </MediaQuery>
                    </>
                }
                {action === 'remove' && 
                    <MediaQuery minWidth={768}>
                        <ActionItem key={nanoid()}>
                        <Time>{time}</Time>
                        <Text>Image ID: <Id>{id}</Id> was removed from {type}</Text>
                        </ActionItem>
                    </MediaQuery>
                }
            </>
            )}
        </ActionList>
    )

}


export {ActionsSection};