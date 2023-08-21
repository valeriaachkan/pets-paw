import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Subheader } from './Subheader/Subheader';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="voting" element={<Subheader></Subheader>} />
					<Route path="breeds" element={<div>Breeds</div>} />
					<Route path="breeds/:breedId" element={<div>Cat</div>} />
					<Route path="gallery" element={<div>Gallery</div>} />
					<Route path="favorites" element={<div>Favorites</div>} />
					<Route path="likes" element={<div>Likes</div>} />
					<Route path="dislikes" element={<div>Disikes</div>} />
					<Route path="*" element={<div>Not Found</div>} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
