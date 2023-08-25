import { Container, BackButton, Title, Subtitle } from './ToolBar.styled';
import { ReactComponent as BackArrow }from '../../assets/back-20.svg';
import { useParams } from 'react-router-dom';


const ToolBar = ({title, children}) => {
    const { breedId } = useParams();
    const handleGoBack = () => {
        window.history.back();
      };

    return (
        <Container>
            <BackButton onClick={handleGoBack}><BackArrow/></BackButton>
            <Title $isBreedId={breedId && true}>{title}</Title>
            {breedId && <Subtitle>{breedId}</Subtitle>}
            {children}
        </Container>
    )
}

export default ToolBar;

