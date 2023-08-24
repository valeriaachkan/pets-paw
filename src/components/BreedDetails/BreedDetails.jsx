
import { BreedFeatureItem, BreedFeatureName, BreedFeatures, BreedFeatureText, BreedInfoContainer, BreedName, BreedSubtitle, FeaturesWrapper, Wrapper } from "./BreedDetails.styled"

export const BreedDetails = ({breedInfo}) => {
    return(
        <>
            <BreedInfoContainer>
            <BreedName>{breedInfo.name}</BreedName>
            <Wrapper>
                <BreedSubtitle>{breedInfo.description}</BreedSubtitle>
                <BreedFeatures>
                <FeaturesWrapper>
                    <BreedFeatureItem><BreedFeatureText><BreedFeatureName>Temperament:</BreedFeatureName>{breedInfo.temperament}</BreedFeatureText></BreedFeatureItem>
                </FeaturesWrapper>
                    <FeaturesWrapper>
                        <BreedFeatureItem><BreedFeatureName>Origin:</BreedFeatureName><BreedFeatureText>{breedInfo.origin}</BreedFeatureText></BreedFeatureItem>
                        <BreedFeatureItem><BreedFeatureName>Weight:</BreedFeatureName><BreedFeatureText>{breedInfo.weight.metric} kg</BreedFeatureText></BreedFeatureItem>
                        <BreedFeatureItem><BreedFeatureName>Life span:</BreedFeatureName><BreedFeatureText>{breedInfo.life_span} years</BreedFeatureText></BreedFeatureItem>
                    </FeaturesWrapper>
                </BreedFeatures>
            </Wrapper>
            </BreedInfoContainer>
        </>
    )
}