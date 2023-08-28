import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;

	@media only screen and (min-width: 460px) {
		height: 300px;
	}

	@media only screen and ${devices.md} {
		height: 360px;
	}
`;
