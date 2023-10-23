import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { actionsReducer } from './actionsSlice';
import { catsReducer } from './catsSlice';

const catsPersistConfig = {
	key: 'cats',
	storage,
};

export const store = configureStore({
	reducer: {
		actions: actionsReducer,
		cats: persistReducer(catsPersistConfig, catsReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
