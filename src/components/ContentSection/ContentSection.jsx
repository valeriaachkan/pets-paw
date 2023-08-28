import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';


const Container = styled.div`
position: relative;
width: 100%;
min-height: 500px;
height: calc(100% - 140px);
border-radius: 20px;
padding: 20px;
margin-top: 10px;
background-color: #FFFFFF;

overflow-y: scroll;

@media only screen and ${devices.sm} {
    height: calc(100% - 70px);
}


`;

export const ContentSection = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
};