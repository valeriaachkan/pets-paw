import { ReactionList, ReactionButton, Container } from './ReactionButtons.styled';
import { ReactComponent as FavIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/dislike-30.svg';

export const ReactionButtons = ({catInfo, onButtonClick, children}) => {
    return (
        <Container>
{children}
    <ReactionList>
        <ReactionButton onClick={() => onButtonClick('Likes', catInfo)} style={{backgroundColor: '#97EAB9', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}><LikeIcon/></ReactionButton>
        <ReactionButton onClick={() => onButtonClick('Favorites', catInfo)} style={{backgroundColor: '#FF868E'}}><FavIcon/></ReactionButton>
        <ReactionButton onClick={() => onButtonClick('Dislikes', catInfo)} style={{backgroundColor: '#FFD280', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}><DislikeIcon/></ReactionButton>
    </ReactionList>
        </Container>
    )
}