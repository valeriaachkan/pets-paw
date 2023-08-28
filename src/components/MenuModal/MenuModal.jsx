import { useState } from 'react';
import { CloseButton, ModalContainer, Lightbox, MenuButton} from './MenuModal.styled';
import { ReactComponent as CloseIcon }from '../../assets/close-20.svg';
import { ReactComponent as MenuIcon }from '../../assets/menu-icon.svg';
import { NavBar } from '../NavBar/NavBar';

export const MenuModal = ({isOpen})  => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <>
        <MenuButton onClick={handleOpen}><MenuIcon/></MenuButton>
    <ModalContainer
    open={open}
    onClose={handleClose}
    aria-labelledby="menu">
        <Lightbox>
            <CloseButton onClick={handleClose}><CloseIcon/></CloseButton>
            <NavBar handleModalClose={handleClose}/>
        </Lightbox>
    </ModalContainer>
        </>
    );
  }