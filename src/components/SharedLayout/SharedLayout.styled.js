import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
	display: grid;
	grid-template-columns: 8.5% 32.5% 9.5% 49.5%;
	grid-template-rows: 100% 30px;
	margin: 0 auto;
	padding: 30px;
	height: 100vh;
	max-width: 1440px;
`;

export const SideSection = styled.section`
	grid-column: 2;
	grid-row: 1;
`;

export const MainSection = styled.section`
	grid-column: 4;
	grid-row: 1;
	max-height: 100%;
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
	margin-top: 85px;
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
