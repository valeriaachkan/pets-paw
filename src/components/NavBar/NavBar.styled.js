import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Nav = styled.nav`
	color: #8c8c8c;
	font-size: 20;
	width: 100%;

	@media only screen and ${devices.md} {
		display: flex;
		gap: 10px;
		justify-content: space-between;
		margin-bottom: 60px;
	}
`;

export const ImageThumb = styled.div`
	@media only screen and ${devices.onlyXs} {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	@media only screen and ${devices.md} {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150px;
		border-radius: 20px;
		border: 4px solid rgba(255, 255, 255, 0.6);
		background-color: #ffd280;
		margin-bottom: 10px;
	}

	@media only screen and ${devices.lg} {
		height: 198px;
	}
`;

export const Title = styled.div`
	padding: 10px;
	border-radius: 10px;
	background-color: #ffffff;
	color: #ff868e;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.3;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-align: center;
`;

export const Link = styled(NavLink)`
	cursor: pointer;
	display: block;

	@media only screen and ${devices.onlyXs} {
		margin-bottom: 20px;
	}

	@media only screen and ${devices.md} {
		width: calc((100% - 20px) / 3);
	}

	&:hover > ${ImageThumb} {
		border-color: #fff;
	}
	&.active > ${ImageThumb} {
		border-color: #fbe0dc;
	}

	&:hover > ${Title} {
		background-color: #fbe0dc;
	}
	&.active > ${Title} {
		background-color: #ff868e;
		color: #fff;
	}
`;
