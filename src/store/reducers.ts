import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './taskslice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
