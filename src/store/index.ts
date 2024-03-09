// store/index.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import taskReducer from './taskslice';
import completedTaskReducer from './completedTaskSlice'; // Import the completedTaskSlice reducer

const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers including the completedTaskReducer
const rootReducer = combineReducers({
  tasks: taskReducer,
  completedTasks: completedTaskReducer, // Add completedTasks reducer here
  // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;