import styled from 'styled-components';

const NotFound = styled.p`
padding: 18px 20px;
border-radius: 10px;
background: #F8F8F7;

color: #8C8C8C;
font-size: 16px;
line-height: 1.5; 
`;

const Error = styled.p`
padding: 18px 20px;
border-radius: 10px;
background: #F8F8F7;

color: #8C8C8C;
font-size: 20pxpx;
font-weight: 500;
text-align: center;
margin-bottom: 20px;
`;


export const Notification = ({error, notFound}) => {
return(
    <>
    {notFound && <NotFound>No item found</NotFound>}
    {error && <Error>Sorry, something went wrong! Try reloading the page!</Error>}
    </>
)
}