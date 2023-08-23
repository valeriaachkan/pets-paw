import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	min-height: 404px;
	margin-top: 20px;
	margin-bottom: 12px;
`;

export const ReactionList = styled.ul`
	position: absolute;
	bottom: 0;
	left: 30.5%;
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
	width: 80px;
	height: 80px;
	fill: #fff;

	&:hover {
		opacity: 0.5;
	}
`;
