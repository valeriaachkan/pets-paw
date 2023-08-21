import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	color: #8c8c8c;
	font-size: 20;
	margin-bottom: 60px;
`;

export const ImageThumb = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 198px;
	border-radius: 20px;
	border: 4px solid rgba(255, 255, 255, 0.6);
	background-color: #ffd280;
	margin-bottom: 10px;
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
	flex-basis: calc((100% - 32px) / 3);
	cursor: pointer;

	&.hover > ${ImageThumb} {
		border-color: #fff;
	}
	&.active > ${ImageThumb} {
		border-color: #fbe0dc;
	}

	&.hover > ${Title} {
		background-color: #fbe0dc;
	}
	&.active > ${Title} {
		background-color: #ff868e;
		color: #fff;
	}
`;
