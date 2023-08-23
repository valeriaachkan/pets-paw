import styled from 'styled-components';

export const Overlay = styled.div`
	width: 100%;
	height: 360px;
	border-radius: 20px;

	background-color: #c4c4c4;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	overflow: hidden;
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
