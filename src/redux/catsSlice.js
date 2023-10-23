import { createSlice } from '@reduxjs/toolkit';

const catsSlice = createSlice({
	name: 'cats',
	initialState: { favorites: [], likes: [], dislikes: [] },
	reducers: {
		addCatToFavorites: {
			reducer(state, action) {
				state.favorites.unshift(action.payload);
			},
			prepare(cat) {
				return {
					payload: { id: cat.id, url: cat.url },
				};
			},
		},
		addCatToLikes: {
			reducer(state, action) {
				state.likes.unshift(action.payload);
			},
			prepare(cat) {
				return {
					payload: { id: cat.id, url: cat.url },
				};
			},
		},
		addCatToDislikes: {
			reducer(state, action) {
				state.dislikes.unshift(action.payload);
			},
			prepare(cat) {
				return {
					payload: { id: cat.id, url: cat.url },
				};
			},
		},
		removeCat(state, action) {
			const index = state.favorites.findIndex(
				(cat) => cat.id === action.payload
			);
			state.favorites.splice(index, 1);
		},
	},
});

export const { addCatToFavorites, addCatToLikes, addCatToDislikes, removeCat } =
	catsSlice.actions;
export const catsReducer = catsSlice.reducer;
