import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../constants/breakpoints';

export const SideSection = styled.section`
	@media only screen and ${devices.onlySm} {
		display: none;

		${({ $isVisible }) =>
			$isVisible === true &&
			`		
	    display: block;
		`}
	}

	@media only screen and ${devices.md} {
		grid-column: 2;
		grid-row: 1;
	}
`;

export const HomeLogo = styled(Link)`
	cursor: pointer;
`;

export const Heading = styled.h1`
	color: #1d1d1d;
	font-size: 44px;
	font-weight: 500;
	line-height: 1.3;
	margin-bottom: 10px;
	margin-top: 80px;

	@media only screen and ${devices.md} {
		margin-top: 85px;
	}
`;

export const Subheading = styled.h2`
	color: #8c8c8c;
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 60px;
`;

export const Caption = styled.p`
	color: #1d1d1d;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 20px;
`;
