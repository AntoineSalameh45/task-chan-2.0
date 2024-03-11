import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { deleteTask, updateTaskStatus } from '../../../store/taskslice';
import { Task } from '../../../components/molecules/taskform';

/**
 * CompletedPage component displays a list of completed tasks.
 * It allows users to delete completed tasks and mark them as active.
 */
const CompletedPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  /**
   * Handles task deletion.
   * @param taskId The ID of the task to be deleted.
   */
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  /**
   * Handles toggling task completion status.
   * @param taskId The ID of the task to be toggled.
   */
  const handleToggleCompleted = (taskId: string) => {
    dispatch(updateTaskStatus({ taskId, completed: false })); // Update task status to active
  };

  // Filter completed tasks
  const completedTasks = tasks.filter(task => task.completed);

  // Filter unique completed tasks
  const uniqueCompletedTasks = completedTasks.filter((task, index, self) =>
    index === self.findIndex((t) => t.id === task.id)
  );

  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {/* Render task cards for completed tasks */}
          {uniqueCompletedTasks.length > 0 ? (
            uniqueCompletedTasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onToggleCompleted={handleToggleCompleted} // Pass handleToggleCompleted function
              />
            ))
          ) : (
            // Message for no completed tasks
            <p className='mt-[100px] w-fit h-fit p-12 bg-[#ffffff69] border-2 border-violet-900'>No completed tasks yet.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default CompletedPage;