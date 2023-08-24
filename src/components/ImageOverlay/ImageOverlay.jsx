import { Overlay, Image } from "./ImageOverlay.styled"
import placeholder from '../../assets/upload-bg.png';

export const ImageOverlay = ({url}) => {
        return (
        <Overlay >
            { url ? <Image src={url} alt='Photo of a Cat'/> : <Image src={placeholder} style={{objectFit: 'contain', width: '200px', height: '200px', margin: '12% auto'}} alt='Photo of a Cat'/>}
        </Overlay>
        )
    }