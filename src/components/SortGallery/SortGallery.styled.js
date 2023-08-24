import styled from 'styled-components';

export const SortContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 10px 20px 20px;
	background: #f8f8f7;
	border-radius: 20px;
	margin-bottom: 20px;
`;

export const Wrapper = styled.li`
	width: calc((100% - 10px) / 2);

	&:last-child {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-height: 58px;
	}
`;
export const SelectLabel = styled.p`
	color: #8c8c8c;
	font-size: 10px;
	font-weight: 500;
	line-height: 1.8;
	text-transform: uppercase;
	margin-left: 7px;
`;
export const UpdateButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 0;
	border-radius: 10px;
	background-color: #fff;
	fill: #ff868e;
	margin-top: 18px;
	margin-left: 10px;

	cursor: pointer;

	&:hover,
	&:focus,
	&.active {
		background-color: #ff868e;
		fill: #fff;
	}
`;
