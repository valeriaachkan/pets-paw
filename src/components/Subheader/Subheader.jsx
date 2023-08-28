import MediaQuery from 'react-responsive';
import { Container, InputOverlay, SearchButton, SearchInput, UserRemarks, PageLink, NavWrapper } from "./Subheader.styled"
import { ReactComponent as SearchIcon }from '../../assets/search-icon.svg';
import { ReactComponent as FavIcon }from '../../assets/fav-30.svg';
import { ReactComponent as LikeIcon }from '../../assets/like-30.svg';
import { ReactComponent as DislikeIcon }from '../../assets/dislike-30.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuModal } from '../MenuModal/MenuModal';



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
const handleSearchButtonClick = () => {
    navigate(`/search/${searchQuery}`);
}


    return (
    <Container>
        <MediaQuery maxWidth={767}>
            <div style={{width: '100%'}}>
            <NavWrapper>
                <MenuModal/>
                <UserRemarks>
                    <li><PageLink to='/favorites'><LikeIcon/></PageLink></li>
                    <li><PageLink to='/likes'><FavIcon/></PageLink></li>
                    <li><PageLink to='/dislikes'><DislikeIcon/></PageLink></li>
                </UserRemarks>
            </NavWrapper>
            <InputOverlay>
                <SearchInput value={searchQuery} type='text' placeholder="Search for breeds by name" onChange={(e)=>handleChange(e)} onKeyPress={handleKeyPress} name="searchQuery"/>
                <SearchButton onClick={()=>handleSearchButtonClick()}><SearchIcon/></SearchButton>
            </InputOverlay>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={1023} >
            <InputOverlay>
                <SearchInput value={searchQuery} type='text' placeholder="Search for breeds by name" onChange={(e)=>handleChange(e)} onKeyPress={handleKeyPress} name="searchQuery"/>
                <SearchButton onClick={()=>handleSearchButtonClick()}><SearchIcon/></SearchButton>
            </InputOverlay>
            <UserRemarks>
                <li><PageLink to='/favorites'><LikeIcon/></PageLink></li>
                <li><PageLink to='/likes'><FavIcon/></PageLink></li>
                <li><PageLink to='/dislikes'><DislikeIcon/></PageLink></li>
            </UserRemarks>
        </MediaQuery>

        <MediaQuery minWidth={1024}>
            <InputOverlay>
                <SearchInput value={searchQuery} type='text' placeholder="Search for breeds by name" onChange={(e)=>handleChange(e)} onKeyPress={handleKeyPress} name="searchQuery"/>
                <SearchButton onClick={(e)=>handleSearchButtonClick(e)}><SearchIcon/></SearchButton>
            </InputOverlay>
            <UserRemarks>
                <li><PageLink to='/favorites'><LikeIcon/></PageLink></li>
                <li><PageLink to='/likes'><FavIcon/></PageLink></li>
                <li><PageLink to='/dislikes'><DislikeIcon/></PageLink></li>
            </UserRemarks>
        </MediaQuery>
    </Container>
    )
}