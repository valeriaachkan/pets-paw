import { PageContainer, SideSection, MainSection, HomeLogo, Heading, Subheading, Caption} from "./SharedLayout.styled";
import { Outlet } from "react-router";
// import BeatLoader from 'react-spinners/ClipLoader';
import { ReactComponent as Logo } from "/Users/valeriaachkan/Documents/projects/pets-paw/src/assets/Logo.svg";
import { NavBar } from "../NavBar/NavBar";



export const SharedLayout = () => {
    return (
    <PageContainer>
        <SideSection>
            <HomeLogo to="/"><Logo /></HomeLogo>
    
            <Heading>Hi!👋</Heading>
            <Subheading>Welcome to MacPaw Bootcamp 2023</Subheading>

            <Caption>Lets start using The Cat API</Caption>
            <NavBar/>
            
        </SideSection>
        <MainSection>
            <Outlet />
        </MainSection>
    </PageContainer>
)
}

// <PageContainer>
//             <Header />
//             <Suspense fallback={<BeatLoader
// 	color={'#9c92f8'}
// 	cssOverride={override}
// 	size={150}
// 	aria-label="Loading Spinner"
// 	data-testid="loader"
// />}>
//             <Outlet />
//             </Suspense>
//         </PageContainer>