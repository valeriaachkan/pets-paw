import { Overlay, Image } from "./ImageOverlay.styled"

export const ImageOverlay = ({url}) => {
        return (
        <Overlay>
            <Image src={url} alt='Photo of a Cat'/>
        </Overlay>
        )
    }