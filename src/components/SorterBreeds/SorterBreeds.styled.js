import styled from 'styled-components';

export const SortContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const SortOrder = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background-color: #f8f8f7;
	border: 2px solid #f8f8f7;

	cursor: pointer;

	&:hover,
	&:focus,
	&.active {
		border: 2px solid #fbe0dc;
	}
`;
