import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const InputOverlay = styled.div`
	position: relative;
`;

export const SearchInput = styled.input`
	width: 100%;
	border-radius: 20px;
	border: 2px solid #fff;
	outline: 0;
	background: #fff;
	padding: 13px 20px;

	color: #8c8c8c;
	font-size: 20px;
	line-height: 1.5;

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

	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background: #fbe0dc;
`;
