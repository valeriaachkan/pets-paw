import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    position: 'relative',
    left: '40%',
    marginTop: '100px',
};

export const Loader = ({loading}) => {
    return (<ClipLoader
        color={'#FBE0DC'}
        loading={loading}
        size={120}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier= "0.5"
    />)
}