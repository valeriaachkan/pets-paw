import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Container = styled.div`
	background: #fff;
	margin-bottom: 20px;

	@media only screen and ${devices.sm} and (max-width: 1023px) {
		display: flex;
		gap: 10px;
		max-height: 40px;
	}

	@media only screen and ${devices.lg} {
		display: flex;
		gap: 10px;
		max-height: 40px;
	}
`;

export const BackButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background: #fbe0dc;
	fill: #ff868e;

	cursor: pointer;

	&:hover {
		background-color: #ff868e;
		fill: #fff;
	}
`;

export const Title = styled.h3`
	width: fit-content;
	padding: 5px 15px;
	border-radius: 10px;
	background-color: #ff868e;

	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 2px;

	@media only screen and ${devices.sm} {
		padding: 5px 30px;
	}

	${({ $isBreedId }) =>
		$isBreedId === true &&
		`
			color: #FF868E;
			background-color: #FBE0DC;
		`}
`;

export const Subtitle = styled.p`
	padding: 5px 15px;
	border-radius: 10px;
	background-color: #ff868e;

	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 2px;

	@media only screen and ${devices.sm} {
		padding: 5px 30px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
`;
