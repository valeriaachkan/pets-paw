import styled from 'styled-components';

export const ActionList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	max-height: 270px;
	overflow: hidden;
`;
export const ActionItem = styled.li`
	position: relative;
	display: flex;
	gap: 20px;
	align-items: center;
	width: 100%;
	padding: 15px;
	border-radius: 10px;
	background-color: #f8f8f7;
`;

export const Time = styled.time`
	padding: 3px 10px;
	border-radius: 5px;
	background-color: #fff;
	color: #1d1d1d;
	font-size: 16px;
	line-height: 1.5;
`;

export const Text = styled.p`
	color: #8c8c8c;
	font-size: 16px;
	line-height: 1.5;
`;

export const Id = styled.span`
	color: #1d1d1d;
	font-weight: 500;
`;
