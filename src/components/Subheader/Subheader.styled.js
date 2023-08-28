import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
`;

export const InputOverlay = styled.div`
	position: relative;
	flex-grow: 2;
`;

export const SearchInput = styled.input`
	width: 100%;
	border-radius: 20px;
	border: 2px solid #fff;
	outline: 0;
	background: #fff;
	padding: 13px 20px;

	color: ##1d1d1d;
	font-size: 20px;
	line-height: 1.5;

	&::placeholder {
		color: #8c8c8c;
	}

	&:hover {
		border-color: #fbe0dc;
	}
	&:focus {
		border-color: #ff868e;
	}
`;

export const SearchButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background: #fbe0dc;

	cursor: pointer;
`;

export const UserRemarks = styled.ul`
	display: flex;
	gap: 10px;
`;

export const PageLink = styled(NavLink)`
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

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`;
