
import { Container, BackButton, Title } from './ToolBar.styled';
import { ReactComponent as BackArrow }from '/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/back-20.svg';
// import SortBreeds from '../SortBreeds/SortBreeds';

const ToolBar = ({title, children}) => {
    return (
        <Container>
            <BackButton><BackArrow/></BackButton>
            <Title>{title}</Title>
            {children}
            {/* {sort && <SortBreeds paramsChangeHandler={paramsChangeHandler}/>} */}
        </Container>
    )
}

export default ToolBar;

