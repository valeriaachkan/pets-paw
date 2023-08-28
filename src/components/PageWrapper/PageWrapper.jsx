import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

const PageContainer = styled.div`
	padding: 20px;
	width: 100%;
	height: 100vh;

	@media only screen and ${devices.md} {
		display: grid;
		grid-template-columns: 8.5% 32.5% 9.5% 49.5%;
		grid-template-rows: 100% 30px;

		margin: 0 auto;
		padding: 30px;
	}
	@media only screen and ${devices.lg} {
		max-width: 1440px;
	}
`;

export const PageWrapper = ({children}) => {
    return (
    <PageContainer>
        {children}
    </PageContainer>
)
}