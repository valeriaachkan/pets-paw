import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Gallery = styled.ul`
	@media only screen and ${devices.sm} {
		display: grid;
		grid-template-columns: repeat(3, 31.25%);
		grid-gap: 20px;

		${({ $gridLength }) =>
			$gridLength === 5
				? `grid-template-rows: repeat(3, 140px);`
				: $gridLength === 10
				? `grid-template-rows: repeat(6, 140px);`
				: $gridLength === 15
				? `grid-template-rows: repeat(9, 140px);`
				: $gridLength === 20
				? `grid-template-rows: repeat(12, 140px);`
				: `grid-template-rows: repeat(3, 140px);`}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background: rgba(255, 134, 142, 0.6);
	visibility: hidden;
`;
export const GalleryItem = styled.li`
	position: relative;
	width: 100%;
	height: 205px;
	border-radius: 20px;
	background: #c4c4c4;
	overflow: hidden;

	&:not(:last-child) {
		margin-bottom: 10px;
	}

	@media only screen and (min-width: 480px) {
		height: 300px;
	}

	@media only screen and ${devices.sm} {
		height: 100%;
		margin-bottom: 0;

		&:nth-child(1) {
			grid-area: 1 / 1 / 3 / 2;
		}
		&:nth-child(2) {
			grid-area: 1 / 2 / 2 / 3;
		}
		&:nth-child(3) {
			grid-area: 1 / 3 / 2 / 4;
		}
		&:nth-child(4) {
			grid-area: 2 / 2 / 4 / 4;
		}
		&:nth-child(5) {
			grid-area: 3 / 1 / 4 / 2;
		}
		&:nth-child(6) {
			grid-area: 4 / 1 / 5 / 2;
		}
		&:nth-child(7) {
			grid-area: 4 / 2 / 5 / 3;
		}
		&:nth-child(8) {
			grid-area: 5 / 1 / 7 / 3;
		}
		&:nth-child(9) {
			grid-area: 4 / 3 / 6 / 4;
		}
		&:nth-child(10) {
			grid-area: 6 / 3 / 7 / 4;
		}
		&:nth-child(11) {
			grid-area: 7 / 3 / 8 / 4;
		}
		&:nth-child(12) {
			grid-area: 7 / 2 / 8 / 3;
		}
		&:nth-child(13) {
			grid-area: 7 / 1 / 9 / 2;
		}
		&:nth-child(14) {
			grid-area: 8 / 2 / 10 / 4;
		}
		&:nth-child(15) {
			grid-area: 9 / 1 / 10 / 2;
		}
		&:nth-child(16) {
			grid-area: 10 / 1 / 11 / 2;
		}
		&:nth-child(17) {
			grid-area: 10 / 2 / 11 / 3;
		}
		&:nth-child(18) {
			grid-area: 11 / 1 / 13 / 3;
		}
		&:nth-child(19) {
			grid-area: 10 / 3 / 12 / 4;
		}
		&:nth-child(20) {
			grid-area: 12 / 3 / 13 / 4;
		}
	}

	&:hover > ${Wrapper} {
		visibility: visible;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const BreedName = styled.p`
	position: absolute;
	bottom: 10px;
	right: 10px;
	width: calc(100% - 20px);
	padding: 5px 10px;
	border-radius: 10px;
	background: #fff;

	color: #ff868e;
	text-align: center;
	font-size: 16px;
	line-height: 1.5;
`;

export const BreedLink = styled(Link)`
	display: block;

	width: 100%;
	height: 100%;

	&:hover > ${Wrapper} {
		visibility: visible;
	}
`;

export const FavButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
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
