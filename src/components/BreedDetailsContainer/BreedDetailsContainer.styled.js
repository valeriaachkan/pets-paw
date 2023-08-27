import styled from 'styled-components';

export const BreedInfoContainer = styled.fieldset`
	margin: 0;
	margin-top: 20px;
	padding: 0;

	border-radius: 20px;

	border: 2px solid #fbe0dc;
`;

export const BreedName = styled.legend`
	display: inline-block;
	border-radius: 20px;
	background: #fff;
	padding: 5px 40px;

	color: #1d1d1d;
	font-size: 36px;
	font-weight: 500;
	text-align: center;
`;

export const Wrapper = styled.div`
	padding: 0 40px 20px;
	// border-radius: 20px;
	// border: 2px solid #fbe0dc;
`;

export const BreedSubtitle = styled.p`
	color: #8c8c8c;
	font-size: 18px;
	font-weight: 500;
	text-align: center;
`;

export const BreedFeatures = styled.ul`
	display: flex;
	gap: 20px;
	margin-top: 20px;
`;

export const BreedFeatureItem = styled.li`
	display: flex;
	gap: 5px;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
export const BreedFeatureName = styled.span`
	display: block;
	color: #1d1d1d;
	font-size: 16px;
	font-weight: 500;
`;
export const BreedFeatureText = styled.p`
	color: #8c8c8c;
	font-size: 16px;
	line-height: 1.5;
`;

export const FeaturesWrapper = styled.div`
	width: calc((100% - 20px) / 2);
`;
