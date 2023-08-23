import { Container, InputOverlay, SearchButton, SearchInput, UserPics, Link } from "./Subheader.styled"
import { ReactComponent as SearchIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/search-icon.svg';
import { ReactComponent as FavIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/dislike-30.svg';



export const Subheader = () => {
    return (
<Container>
    <InputOverlay>
    <SearchInput type='text' placeholder="Search for breeds by name"/>
    <SearchButton type='submit'><SearchIcon/></SearchButton>
    </InputOverlay>
    <UserPics>
        <li><Link to='/favorites'><LikeIcon/></Link></li>
        <li><Link to='/likes'><FavIcon/></Link></li>
        <li><Link to='/dislikes'><DislikeIcon/></Link></li>
    </UserPics>
</Container>
    )
}