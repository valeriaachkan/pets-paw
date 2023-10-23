import { createSlice } from '@reduxjs/toolkit';

const actionsSlice = createSlice({
	name: 'actions',
	initialState: [],
	reducers: {
		addAction: {
			reducer(state, action) {
				state.unshift(action.payload);
			},
			prepare({ type, id, action }) {
				const date = new Date();
				const time = date.toLocaleTimeString().slice(0, 5);
				return {
					payload: { type, id, action, time },
				};
			},
		},
	},
});

export const { addAction } = actionsSlice.actions;
export const actionsReducer = actionsSlice.reducer;
