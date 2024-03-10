// store/taskslice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../components/molecules/taskform';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    updateTaskStatus(state, action: PayloadAction<{ taskId: string, completed: boolean }>) {
      const { taskId, completed } = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.completed = completed;
      }
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;