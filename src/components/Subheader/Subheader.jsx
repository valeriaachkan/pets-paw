import { Container, InputOverlay, SearchButton, SearchInput, UserRemarks, PageLink } from "./Subheader.styled"
import { ReactComponent as SearchIcon }from '../../assets/search-icon.svg';
import { ReactComponent as FavIcon }from '../../assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '../../assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '../../assets/dislike-30.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export const Subheader = ({value}) => {
const [searchQuery, setSearchQuery] = useState(value ?? '');
const navigate = useNavigate()


const handleChange = e => {
    const { value } = e.currentTarget;
    value === '' ? setSearchQuery('') : setSearchQuery(value);
};

const handleKeyPress = (e) => {
    if (e.key === 'Enter' ) {
        navigate(`/search/${searchQuery}`);
    };
}
const handleSearchButtonClick = (e) => {
    navigate(`/search/${searchQuery}`);
}

    return (
    <Container>
        <InputOverlay>
            <SearchInput value={searchQuery} type='text' placeholder="Search for breeds by name" onChange={(e)=>handleChange(e)} onKeyPress={handleKeyPress} name="searchQuery"/>
            <SearchButton onClick={(e)=>handleSearchButtonClick(e)}><SearchIcon/></SearchButton>
        </InputOverlay>
        <UserRemarks>
            <li><PageLink to='/favorites'><LikeIcon/></PageLink></li>
            <li><PageLink to='/likes'><FavIcon/></PageLink></li>
            <li><PageLink to='/dislikes'><DislikeIcon/></PageLink></li>
        </UserRemarks>
    </Container>
    )
}