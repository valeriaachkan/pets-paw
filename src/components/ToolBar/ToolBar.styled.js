import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 10px;
	max-height: 40px;
	background: #fff;
`;

export const BackButton = styled.button`
	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background: #fbe0dc;

	cursor: pointer;
`;

export const Title = styled.h3`
	padding: 5px 30px;
	border-radius: 10px;
	background-color: #ff868e;

	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 2px;

	${({ $isBreedId }) =>
		$isBreedId === true &&
		`
			color: #FF868E;
			background-color: #FBE0DC;
		`}
`;

export const Subtitle = styled.p`
	padding: 5px 30px;
	border-radius: 10px;
	background-color: #ff868e;

	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 2px;
`;
