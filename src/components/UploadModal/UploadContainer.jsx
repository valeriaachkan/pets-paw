import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {ReactComponent as Placeholder} from '../../assets/placeholder.svg';
import {ReactComponent as ErrorIcon} from '../../assets/error-20.svg';
import {ReactComponent as SuccesIcon} from '../../assets/success-20.svg';
import { DropContainer, FileName, Span, StatusNotification, Text, UploadPhotoButton, Wrapper } from './UploadModal.styled';
import { uploadCatImage } from '../../services/catApi-service';
import { ClipLoader } from 'react-spinners';


const thumbsContainer = {
  position: 'absolute',
  top: '242px',
  right: '61px',
  width:'82%',
  height: '280px',
  borderRadius: '10px',
  pointerEvents: 'none',
};

const thumb = {
  display: 'block',
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: '280px',
  objectFit: 'cover',
};

const override = {
  display: 'block',
  margin: '40px auto'
};



export const UploadContainer =() =>{
  const [files, setFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
        
      })),
       setError(false));
       setIsUploaded(false);
    },
    
  });

  useEffect(()=>{
    if(isUploaded) {
        setFiles([]);
    }
  }, [isUploaded])
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  

  async function handlePhotoUploading(file) {
    try {
        setLoading(true);
        setError(false);
        await uploadCatImage(file);
        setIsUploaded(true);
    } catch (error) {
        setError(true);
        setIsUploaded(false);
    }  finally {
        setLoading(false);
  }
}

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
    <div className="container" >
      <DropContainer $isFailed={error} {...getRootProps({className: 'dropzone'})}>
        <Placeholder/>
        <input  {...getInputProps()} />
        <Text><Span>Drag here</Span> your file or <Span >Click here</Span> to upload</Text>
      </DropContainer>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </div>
    {!loading && files.length === 0 && <FileName>No file selected</FileName>}
    {!loading && !error && files.length > 0 && <Wrapper><FileName>Image File Name: {files.map(file => file.name)}</FileName><UploadPhotoButton onClick={()=>handlePhotoUploading(...files)}>Upload photo</UploadPhotoButton></Wrapper>}
    {loading && <ClipLoader
        color={'#FF868E'}
        loading={loading}
        size={60}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier= "0.5"
    />}
    {error && <Wrapper><FileName>Image File Name: {files.map(file => file.name)}</FileName><StatusNotification><ErrorIcon/>No Cat found - try a different one</StatusNotification></Wrapper>}
    {!loading && isUploaded && <StatusNotification><SuccesIcon/> Thanks for the Upload - Cat found!</StatusNotification>}
    </div>
  );
}




