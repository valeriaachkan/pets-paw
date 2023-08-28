import Modal from '@mui/material/Modal';
import styled from 'styled-components';

export const MenuButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	border-radius: 20px;
	background: #fff;
	fill: #ff868e;

	&:hover {
		background-color: #fbe0dc;
	}
	&.active {
		background-color: #ff868e;
		fill: #fff;
	}
`;

export const ModalContainer = styled(Modal)`
	position: relative;
`;

export const Lightbox = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 90px 20px 20px;
	background: #f8f8f7;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background-color: #fff;
	fill: #ff868e;

	cursor: pointer;

	&:hover,
	&:focus,
	&.active {
		background-color: #ff868e;
		fill: #fff;
	}
`;
