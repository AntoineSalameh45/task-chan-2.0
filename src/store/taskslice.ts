import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../components/molecules/taskform';

// Define the shape of the task state
interface TaskState {
  tasks: Task[];
  dueDate: Date | null; // Add dueDate to the state
}

// Define the initial state
const initialState: TaskState = {
  tasks: [],
  dueDate: null,
};

// Create a slice for managing tasks
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Reducer for adding a new task
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    // Reducer for deleting a task
    deleteTask(state, action: PayloadAction<string>) {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    // Reducer for updating the status of a task
    updateTaskStatus(state, action: PayloadAction<{ taskId: string, completed: boolean }>) {
      const { taskId, completed } = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.completed = completed;
      }
    },
    // Reducer for updating the due date
    updateDueDate(state, action: PayloadAction<Date>) {
      state.dueDate = action.payload;
    },
  },
});

// Extract action creators and reducer from the slice
export const { addTask, deleteTask, updateTaskStatus, updateDueDate } = taskSlice.actions;
export default taskSlice.reducer;