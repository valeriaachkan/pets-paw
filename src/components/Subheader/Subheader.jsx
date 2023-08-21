import { Container, InputOverlay, SearchButton, SearchInput } from "./Subheader.styled"
import { ReactComponent as SearchIcon }from '../assets/search-icon.svg';

export const Subheader = () => {
    return (
<Container>
    <InputOverlay>
    <SearchInput type='text' placeholder="Search for breeds by name"/>
    <SearchButton type='submit'><SearchIcon/></SearchButton>
    </InputOverlay>
</Container>
    )
}