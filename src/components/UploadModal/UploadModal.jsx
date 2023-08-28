import { useState } from 'react';
import { CloseButton, Container, Lightbox, ModalUpload, PrivacyLink, Subtitle, Title, UploadButton } from './UploadModal.styled';
import { ReactComponent as UploadIcon }from '../../assets/upload-16.svg';
import { ReactComponent as CloseIcon }from '../../assets/close-20.svg';
import { UploadContainer } from './UploadContainer';

export const UploadModal = ()  => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <UploadButton onClick={handleOpen}><UploadIcon style={{marginRight: '10px'}}/>upload</UploadButton>
      <ModalUpload
        open={open}
        onClose={handleClose}
        aria-labelledby="upload"
      >
        <Lightbox>
            <CloseButton onClick={handleClose}><CloseIcon/></CloseButton>
            <Title>Upload a .jpg or .png Cat Image</Title>
            <Subtitle>Any uploads must comply with the <PrivacyLink href='https://thecatapi.com/privacy'>upload guidelines</PrivacyLink> or face deletion.</Subtitle>
            <UploadContainer />
        </Lightbox>
      </ModalUpload>
    </Container>
  );
}