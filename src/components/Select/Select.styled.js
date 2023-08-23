import styled from 'styled-components';

export const SelectContainer = styled.div`
	position: relative;
	margin: 0;
`;

export const SelectLabelButton = styled.button`
	position: relative;
	width: 100%;
	background-color: #f8f8f7;
	border: 2px solid #f8f8f7;
	border-radius: 10px;

	padding: 6px 10px;
	font-size: 16px;
	line-height: 1.5;
	text-align: left;
	color: #8c8c8c;
	cursor: pointer;

	&:hover {
		border: 2px solid #fbe0dc;
	}
`;

export const DropdownStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;

	width: 100%;
	max-height: 400px;
	min-width: 100px;
	padding: 8px 12px;
	padding-bottom: 0;

	border-radius: 10px;
	background-color: #f8f8f7;

	transition: max-height 0.2s ease;
	overflow: scroll;

	${({ $isVisible }) =>
		$isVisible !== true &&
		`	max-height: 40px;
			visibility: hidden;
		`}
`;
export const DropdownItem = styled.div`
	padding-bottom: 6px;
	color: #8c8c8c;
	font-size: 16px;
	line-height: 1.5;

	cursor: pointer;
`;
