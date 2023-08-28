import styled from 'styled-components';
import coverImg from '../assets/girl-and-pet.png';
import { MainSection } from '../components/MainSection/MainSection';
import { MenuSection } from '../components/MenuSection/MenuSection';
import { PageWrapper } from '../components/PageWrapper/PageWrapper';
import { devices } from '../constants/breakpoints';

const StyledCoverSection = styled.div`
position: relative;
width: 100%;
height: 100%;
border-radius: 20px;
background-color: #FBE0DC;

    @media only screen and ${devices.onlyXs} {
    	display: none;
    
    }
`;

const CoverImage = styled.img`
position: absolute;
top: -30px;
right: -30px;
width: 775px;
`;


export const HomePage = () => {
    return (
        <PageWrapper>
            <MenuSection home={true}/>
            <MainSection home={true}>
                <StyledCoverSection>
                    <CoverImage src={coverImg}/>
                </StyledCoverSection>
            </MainSection>
        </PageWrapper>
    )
}