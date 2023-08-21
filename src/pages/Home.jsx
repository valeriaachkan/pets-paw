import styled from 'styled-components';
import coverImg from '../components/assets/girl-and-pet.png'


const StyledCoverSection = styled.div`
position: relative;
width: 100%;
height: 100%;
border-radius: 20px;
background-color: #FBE0DC;
`;

const CoverImage = styled.img`
position: absolute;
top: -30px;
right: -30px;
width: 775px;
`;


export const Home = () => {
    return (
        <StyledCoverSection>
            <CoverImage src={coverImg}/>
        </StyledCoverSection>
    )
}