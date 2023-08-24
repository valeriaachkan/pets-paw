import { Container, BackButton, Title, Subtitle } from './ToolBar.styled';
import { ReactComponent as BackArrow }from '../../assets/back-20.svg';
import { useParams } from 'react-router-dom';

const ToolBar = ({title, children}) => {
    const { breedId } = useParams();

    return (
        <Container>
            <BackButton><BackArrow/></BackButton>
            <Title $isBreedId={breedId && true}>{title}</Title>
            {breedId && <Subtitle>{breedId}</Subtitle>}
            {children}
        </Container>
    )
}

export default ToolBar;

