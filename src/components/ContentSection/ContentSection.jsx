import styled from 'styled-components';


const Container = styled.div`
width: 100%;
height: calc(100% - 70px);
max-height: 782px;
border-radius: 20px;
padding: 20px;
margin-top: 10px;
background-color: #FFFFFF;
// overflow: scroll;
`;



const ContentSection = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContentSection;