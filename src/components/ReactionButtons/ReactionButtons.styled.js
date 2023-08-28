import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	margin-bottom: -15px;

	@media only screen and ${devices.md} {
		min-height: 404px;
		margin-bottom: 12px;
	}
`;

export const ReactionList = styled.ul`
	position: relative;
	bottom: 30px;
	width: fit-content;
	margin: 0 auto;
	display: flex;
	gap: 4px;
	background-color: #fff;
	border: 4px solid #fff;
	border-radius: 22px;
	overflow: hidden;
`;

export const ReactionButton = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	fill: #fff;

	&:hover {
		opacity: 0.5;
	}

	@media only screen and ${devices.sm} {
		width: 80px;
		height: 80px;
	}
`;
