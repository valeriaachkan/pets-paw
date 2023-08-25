import { PageContainer, SideSection, MainSection, HomeLogo, Heading, Subheading, Caption} from "./SharedLayout.styled";
import { Outlet } from "react-router";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
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