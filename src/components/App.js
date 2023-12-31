import { Routes, Route, Navigate } from 'react-router-dom';
import { BreedDetailsPage } from '../pages/BreedDetailsPage';
import { BreedsPage } from '../pages/BreedsPage';
import { DislikesPage } from '../pages/DislikesPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { GalleryPage } from '../pages/GalleryPage';
import { HomePage } from '../pages/HomePage';
import { LikesPage } from '../pages/LikesPage';
import { SearchPage } from '../pages/SearchPage';
import { VotingPage } from '../pages/VotingPage';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/voting" element={<VotingPage />} />
				<Route path="/breeds" element={<BreedsPage />} />
				<Route path="/breeds/:breedId" element={<BreedDetailsPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
				<Route path="/likes" element={<LikesPage />} />
				<Route path="/dislikes" element={<DislikesPage />} />
				<Route path="/search/" element={<SearchPage />} />
				<Route path="/search/:query" element={<SearchPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
};

export default App;
