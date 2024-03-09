// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskslice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;