import { SideSection, HomeLogo, Heading, Subheading, Caption} from "./MenuSection.styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { NavBar } from "../NavBar/NavBar";

export const MenuSection = ({home = false}) => {
    return (
        <SideSection $isVisible={home}>
            <HomeLogo to="/"><Logo /></HomeLogo>
    
            <Heading>Hi!👋</Heading>
            <Subheading>Welcome to the app for cat enthusiasts.</Subheading>

            <Caption>Lets start using The Cat API</Caption>
            <NavBar />
        </SideSection>
)
}


