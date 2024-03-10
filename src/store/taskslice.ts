import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../components/molecules/taskform';

interface TaskState {
  tasks: Task[];
  dueDate: Date | null; // Add dueDate to the state
}

const initialState: TaskState = {
  tasks: [],
  dueDate: null,
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
    updateDueDate(state, action: PayloadAction<Date>) { // Add action to update dueDate
      state.dueDate = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus, updateDueDate } = taskSlice.actions;
export default taskSlice.reducer;