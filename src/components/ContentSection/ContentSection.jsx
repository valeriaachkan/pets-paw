import styled from 'styled-components';
// import ToolBar from '../ToolBar/ToolBar';


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



const ContentSection = ({pageTitle, children, sort, upload, paramsChangeHandler}) => {
    return (
        <Container>
            {/* <ToolBar title={pageTitle} sort={sort} upload={upload} paramsChangeHandler={paramsChangeHandler}></ToolBar> */}
            {children}
        </Container>
    )
}

export default ContentSection;