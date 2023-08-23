import { ActionItem, ActionList, Id, Text, Time } from "./ActionsSection.styled";
import { ReactComponent as FavIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/dislike-30.svg';


const ActionsSection = ({actions}) => {
    const visibleActions = actions.reverse();
    return (
        <ActionList>
            {visibleActions.map((action) =>
            <ActionItem key={action.id}>
                <Time>{action.time}</Time>
                <Text>Image ID: <Id>{action.id}</Id> was added to {action.type}</Text>
                {action.type === 'Favorites' ?  <FavIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FF868E'}}/> : action.type === 'Likes' ? <LikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#97EAB9'}}/> : <DislikeIcon style={{width:'20px', height:'20px', position: 'absolute', top: '20px', right: '20px',fill: '#FFD280'}}/>}
                </ActionItem>)}
        </ActionList>
    )

}


export {ActionsSection};