import Modal from '@mui/material/Modal';
import styled from 'styled-components';

export const Container = styled.div`
	margin-left: auto;
`;

export const UploadButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 12px 30px;
	border-radius: 10px;
	background-color: #fbe0dc;
	border: 0;

	color: #ff868e;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.33;
	letter-spacing: 2px;
	fill: #ff868e;

	cursor: pointer;
`;

export const ModalUpload = styled(Modal)`
	position: relative;
`;

export const Lightbox = styled.div`
	position: absolute;
	top: 30px;
	right: 30px;
	width: 683.5px;
	height: calc(100% - 60px);
	padding: 100px 20px;
	border-radius: 20px;
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

export const Title = styled.p`
	color: #1d1d1d;
	font-size: 36px;
	font-weight: 500;
	text-align: center;
	margin-bottom: 10px;
`;

export const Subtitle = styled.p`
	color: #8c8c8c;
	font-size: 20px;
	line-height: 1.5;
	text-align: center;
	margin-bottom: 40px;
`;

export const PrivacyLink = styled.a`
	color: #ff868e;
	font-size: 20px;

	&:hover {
		color: #fbe0dc;
	}
`;

// UploadContainer styles
export const Text = styled.p`
	position: absolute;
	top: 145px;
	right: 136px;
	color: #8c8c8c;
	font-size: 20px;
	line-height: 1.5;
	text-align: center;
`;

export const Span = styled.span`
	color: #1d1d1d;
	font-weight: 500;
`;

export const UploadPhotoButton = styled.div`
	width: fit-content;
	padding: 13px 30px;
	border-radius: 10px;
	background-color: #ff868e;
	color: #fff;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.3;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-align: center;

	cursor: pointer;
`;

export const FileName = styled.p`
	color: #8c8c8c;
	font-size: 20px;
	line-height: 1.5;
	text-align: center;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-bottom: ;
`;

export const DropContainer = styled.div`
	position: relative;
	width: 100%;
	height: 320px;
	padding: 60px 220px;
	border-radius: 20px;
	border: 2px dashed #fbe0dc;
	background: #fff;
	cursor: pointer;
	margin-bottom: 20px;

	${({ $isFailed }) =>
		$isFailed === true &&
		`		
		border-color: #FF868E;
		background-color: #FBE0DC;
		`}
`;

export const StatusNotification = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	padding: 18px;
	color: #8c8c8c;
	font-size: 16px;
	line-height: 1.5;
	border-radius: 10px;
	background: #fff;
	margin-top: 10px;
`;
