import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const SortContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 10px;

	@media only screen and ${devices.sm} {
		flex-direction: row;
		margin-top: 0;
	}

	@media only screen and ${devices.md} {
		flex-direction: column;
		margin-top: 10px;
	}

	@media only screen and ${devices.lg} {
		flex-direction: row;
		margin-top: 0;
	}
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

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;
