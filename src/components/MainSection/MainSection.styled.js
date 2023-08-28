import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Section = styled.section`
	height: 100%;
	width: 100%;

	@media only screen and ${devices.md} {
		grid-column: 4;
		grid-row: 1;
		max-height: 100%;
	}
`;
