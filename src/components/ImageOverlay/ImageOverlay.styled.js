import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Overlay = styled.div`
	width: 100%;
	// height: auto;
	height: 200px;
	border-radius: 20px;

	background-color: #c4c4c4;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	overflow: hidden;

	@media only screen and (min-width: 460px) {
		height: 300px;
	}

	@media only screen and ${devices.sm} {
		height: 360px;
	}

	@media only screen and (min-width: 820px) {
		height: 420px;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
