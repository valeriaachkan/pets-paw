import { nanoid } from "nanoid";
import { ActionItem, ActionList, Id, Text, Time } from "./ActionsSection.styled";
import { ReactComponent as FavIcon }from '../../assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '../../assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '../../assets/dislike-30.svg';


const ActionsSection = ({actions}) => {
    return (
        <ActionList>
            {actions.map(({ type, id, action, time }) =>
            <>
                {action === 'add' && 
                    <ActionItem key={nanoid()}>
                        <Time>{time}</Time>
                        <Text>Image ID: <Id>{id}</Id> was added to {type}</Text>
                        {type === 'Favorites' ?  <FavIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FF868E'}}/> : type === 'Likes' ? <LikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#97EAB9'}}/> : <DislikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FFD280'}}/>}
                    </ActionItem>
                }
                {action === 'remove' && 
                    <ActionItem key={nanoid()}>
                        <Time>{time}</Time>
                        <Text>Image ID: <Id>{id}</Id> was removed from {type}</Text>
                    </ActionItem>
                }
            </>
            )}
        </ActionList>
    )

}


export {ActionsSection};