import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderContainer } from './Loader.styled';


const override = {
    // position: 'relative',
    // top: '50%',
    // left: '40%',
    // margin: '0 auto',
    // marginTop: '100px',
};

export const Loader = ({loading, size}) => {
    return (
    <LoaderContainer>
        <ClipLoader
            color={'#FF868E'}
            loading={loading}
            size={size}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier= "0.5"
        />
    </LoaderContainer>
)}