// store/index.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import taskReducer from './taskslice';

// Configuration for persisting Redux state
const persistConfig = {
  key: 'root', // Key for the persisted state in storage
  storage, // Storage engine for persisting the state (localStorage by default)
};

// Combine reducers including the taskReducer
const rootReducer = combineReducers({
  tasks: taskReducer, // Include the taskReducer
});

// Create a persisted reducer with the given configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
});

// Create a persistor for persisting the Redux store
const persistor = persistStore(store);

// Export the Redux store and persistor
export { store, persistor };

// Define the RootState type based on the combined reducers
export type RootState = ReturnType<typeof rootReducer>;