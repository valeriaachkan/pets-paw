import { Container, BackButton, Title, Subtitle, Wrapper } from './ToolBar.styled';
import { ReactComponent as BackArrow }from '../../assets/back-20.svg';
import { useNavigate, useParams } from 'react-router-dom';
import MediaQuery from 'react-responsive';



export const ToolBar = ({title, children}) => {
    const { breedId } = useParams();
    const navigate = useNavigate()

    return (
        <Container>
        <MediaQuery maxWidth={767} >
            <Wrapper>
                <BackButton onClick={() => navigate(-1)}><BackArrow/></BackButton>
                <Title $isBreedId={breedId && true}>{title}</Title>
                {breedId && <Subtitle>{breedId}</Subtitle>}
            </Wrapper>
            {children}
        </MediaQuery>
        <MediaQuery minWidth={768}  maxWidth={1023}>
                <BackButton onClick={() => navigate(-1)}><BackArrow/></BackButton>
                <Title $isBreedId={breedId && true}>{title}</Title>
                {breedId && <Subtitle>{breedId}</Subtitle>}
                {children}
        </MediaQuery>
        <MediaQuery minWidth={1024} maxWidth={1439}>
            <Wrapper>
                <BackButton onClick={() => navigate(-1)}><BackArrow/></BackButton>
                <Title $isBreedId={breedId && true}>{title}</Title>
                {breedId && <Subtitle>{breedId}</Subtitle>}
            </Wrapper>
            {children}
        </MediaQuery>
        <MediaQuery minWidth={1440}>
                <BackButton onClick={() => navigate(-1)}><BackArrow/></BackButton>
                <Title $isBreedId={breedId && true}>{title}</Title>
                {breedId && <Subtitle>{breedId}</Subtitle>}
                {children}
        </MediaQuery>
        </Container>
    )
}


