import { Nav, Link, ImageThumb, Title } from "./NavBar.styled";
import MediaQuery from 'react-responsive';
import voteImg from "../../assets/vote-table.png";
import breedsImg from "../../assets/pet-breeds.png";
import galleryImg from "../../assets/images-search.png";



export const NavBar = ({makeMainSectionVisible, handleModalClose = (()=>{})}) => {
    
    return (
        <Nav>
            <Link to="/voting" onClick={()=>{ makeMainSectionVisible(); handleModalClose()}}>
                <ImageThumb style={{backgroundColor: '#B4B7FF'}}>
                    <MediaQuery minWidth={768} maxWidth={1023}>
                        <img src={voteImg} alt="Voting" />
                    </MediaQuery>
                    <MediaQuery minWidth={1024} maxWidth={1439}>
                        <img src={voteImg} style={{width: '90%', height: '90%'}} alt="Voting" />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                        <img src={voteImg} alt="Voting" />
                    </MediaQuery>
                </ImageThumb>
                <Title>Voting</Title>
            </Link>
            <Link to="/breeds" onClick={()=> { makeMainSectionVisible(); handleModalClose()}}>
                <ImageThumb style={{backgroundColor: '#97EAB9'}}>
                    <MediaQuery minWidth={768} maxWidth={1023}>
                        <img src={breedsImg} alt="Breeds" />
                    </MediaQuery>
                    <MediaQuery minWidth={1024} maxWidth={1439}>
                        <img src={breedsImg} style={{width: '90%', height: '90%'}} alt="Breeds" />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                        <img src={breedsImg} alt="Breeds" />
                    </MediaQuery>
                </ImageThumb>
                <Title>Breeds</Title>
            </Link>
            <Link to="/gallery" onClick={()=> { makeMainSectionVisible(); handleModalClose()}}>
                <ImageThumb style={{backgroundColor: '#FFD280'}}>
                    <MediaQuery minWidth={768} maxWidth={1023}>
                        <img src={galleryImg} alt="Gallery" />
                    </MediaQuery>
                    <MediaQuery minWidth={1024} maxWidth={1439}>
                        <img src={galleryImg} style={{width: '70%', height: '100%'}} alt="Gallery" />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                        <img src={galleryImg} alt="Gallery" />
                    </MediaQuery>
                </ImageThumb>
                <Title>Gallery</Title>
            </Link>
        </Nav>
    )
}