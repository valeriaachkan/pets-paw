import { Container, BackButton, Title, Subtitle, UploadButton } from './ToolBar.styled';
import { ReactComponent as BackArrow }from '../../assets/back-20.svg';
import { ReactComponent as UploadIcon }from '../../assets/upload-16.svg';
import { useParams } from 'react-router-dom';


const ToolBar = ({title, children, onUploadButtonClick}) => {
    const { breedId } = useParams();

    return (
        <Container>
            <BackButton><BackArrow/></BackButton>
            <Title $isBreedId={breedId && true}>{title}</Title>
            {breedId && <Subtitle>{breedId}</Subtitle>}
            {title === 'gallery' && <UploadButton onClick={()=>{onUploadButtonClick()}} type='button'><UploadIcon style={{marginRight: '10px'}}/>Upload</UploadButton>}
            {children}
        </Container>
    )
}

export default ToolBar;

