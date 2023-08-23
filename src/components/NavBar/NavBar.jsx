import { Nav, Link, ImageThumb, Title } from "./NavBar.styled";
import voteImg from "/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/vote-table.png";
import breedsImg from "/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/pet-breeds.png";
import galleryImg from "/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/images-search.png";



export const NavBar = () => {
    return (
        <Nav>
            <Link to="/voting"><ImageThumb style={{backgroundColor: '#B4B7FF'}}><img src={voteImg} alt="Voting" /></ImageThumb><Title>Voting</Title></Link>
            <Link to="/breeds"><ImageThumb style={{backgroundColor: '#97EAB9'}}><img src={breedsImg} alt="Breeds" /></ImageThumb><Title>Breeds</Title></Link>
            <Link to="/gallery"><ImageThumb style={{backgroundColor: '#FFD280'}}><img src={galleryImg} alt="Gallery" /></ImageThumb><Title>Gallery</Title></Link>
        </Nav>
    )
}