import { combineReducers } from '@reduxjs/toolkit';
// Import your slice reducers here
import taskReducer from './taskslice';

const rootReducer = combineReducers({
  // Add your slice reducers here
  tasks: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
