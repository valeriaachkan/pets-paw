import { Routes, Route } from 'react-router-dom';
import { BreedDetailsPage } from '../pages/BreedDetailsPage';
import { BreedsPage } from '../pages/BreedsPage';
import { GalleryPage } from '../pages/GalleryPage';
import { HomePage } from '../pages/HomePage';
import { VotingPage } from '../pages/VotingPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Subheader } from './Subheader/Subheader';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="voting" element={<VotingPage />} />
					<Route path="breeds" element={<BreedsPage />} />
					<Route path="breeds/:breedId" element={<BreedDetailsPage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="favorites" element={<Subheader></Subheader>} />
					<Route
						path="likes"
						element={
							<div>
								<Subheader></Subheader>Likes
							</div>
						}
					/>
					<Route
						path="dislikes"
						element={
							<div>
								<Subheader></Subheader>Disikes
							</div>
						}
					/>
					<Route path="*" element={<div>Not Found</div>} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
