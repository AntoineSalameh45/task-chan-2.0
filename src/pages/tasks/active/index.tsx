import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { toggleTaskCompleted } from '../../../store/taskslice'; // Import action creator for toggling task completion
import { addCompletedTask } from '../../../store/completedTaskSlice'; // Import action creator for adding completed task
import { Task } from '../../../components/molecules/taskcard'; // Import Task interface
import { deleteTask } from '../../../store/taskslice'; // Import action creator for deleting a task


const ActivePage: React.FC = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  // Access tasks from Redux store state
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  // Define handler for toggling task completion and moving task to completed tasks list
  const handleToggleCompleted = (taskId: string) => {
    // Dispatch toggleTaskCompleted action to toggle task completion
    dispatch(toggleTaskCompleted(taskId));

    // Find the completed task from the tasks list
    const completedTask = tasks.find((task: Task) => task.id === taskId);

    if (completedTask) {
      // Dispatch addCompletedTask action to move the completed task to the completed tasks list
      dispatch(addCompletedTask(completedTask));
    }
  };

  // Define handler for deleting a task
  const handleDeleteTask = (taskId: string) => {
    // Dispatch deleteTask action to delete the task
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {/* Conditional rendering */}
          {tasks ? (
            tasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleCompleted={handleToggleCompleted} // Pass handleToggleCompleted function as prop
                onDeleteTask={handleDeleteTask} // Pass handleDeleteTask function as prop
              />
            ))
          ) : (
            <p>Loading tasks...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ActivePage;