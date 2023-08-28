import {Section} from './MainSection.styled';
import { Subheader } from '../Subheader/Subheader';

export const MainSection = ({children, query = null, home = false}) => {
	return (
		<Section >
            {!home && <Subheader query={query}/>}
			{children}
		</Section>
	);
};

