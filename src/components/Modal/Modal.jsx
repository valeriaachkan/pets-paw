import { useState } from 'react';
import { CloseButton, Container, Lightbox, ModalUpload, PrivacyLink, Subtitle, Title, UploadButton } from './Modal.styled';
import { ReactComponent as UploadIcon }from '../../assets/upload-16.svg';
import { ReactComponent as CloseIcon }from '../../assets/close-20.svg';
import { UploadContainer } from './UploadContainer';




export const Modal = ()  => {
  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [isUploaded, setIsUploaded]=useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//  function onUploadPhotoButtonClick(file) {
//         try {
//           setLoading(true);
//                     setError(false);
//             const response = await uploadCatImage(file);
//             setIsUploaded(true);
//         } catch (error) {
//           setError(true);
//           setIsUploaded(false);
//         }  finally {
//           setLoading(false);
//       }
//     }
//     console.log(isUploaded)

  // const handlePhotoUploading = (file) => {
  //   async function uploadPhoto(file) {
  //     try {
  //       setLoading(true);
  //                 setError(false);
  //         const response = await uploadCatImage(file);
  //         console.log(response)
  //     } catch (error) {
  //       setError(true);
  //     }  finally {
  //       setLoading(false);
  //   }
  // }
  // uploadPhoto(file);


  return (
    <Container>
      <UploadButton onClick={handleOpen}><UploadIcon style={{marginRight: '10px'}}/>upload</UploadButton>
      <ModalUpload
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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