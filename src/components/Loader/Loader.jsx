import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    position: 'absolute',
	top: '90px',
	left: '260px',
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