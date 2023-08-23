import { Routes, Route } from 'react-router-dom';
import { Breeds } from '../pages/Breeds';
import { Home } from '../pages/Home';
import { Voting } from '../pages/Voting';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Subheader } from './Subheader/Subheader';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="voting" element={<Voting />} />
					<Route path="breeds" element={<Breeds />} />
					<Route path="breeds/:breedId" element={<div>Cat</div>} />
					<Route path="gallery" element={<div>Gallery</div>} />
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
