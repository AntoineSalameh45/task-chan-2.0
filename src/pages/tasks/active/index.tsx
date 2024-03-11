import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { deleteTask, updateTaskStatus } from '../../../store/taskslice';
import { Task } from '../../../components/molecules/taskform';

/**
 * ActivePage component displays a list of active tasks.
 * It allows users to delete tasks and mark them as completed.
 */
const ActivePage: React.FC = () => {
  const dispatch = useDispatch();

  // Select active tasks from the Redux store state
  const activeTasks = useSelector((state: RootState) => state.tasks.tasks.filter(task => !task.completed));

  // Sort active tasks by priority from high to low
  const sortedActiveTasks = activeTasks.sort((a, b) => {
    if (a.priority === "Urgent") return -1;
    if (b.priority === "Urgent") return 1;
    if (a.priority === "High") return -1;
    if (b.priority === "High") return 1;
    if (a.priority === "Medium") return -1;
    if (b.priority === "Medium") return 1;
    return 0; // If both are Low or equal priority
  });

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
    dispatch(updateTaskStatus({ taskId, completed: true }));
  };

  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {/* Render task cards */}
          {sortedActiveTasks.length > 0 ? (
            sortedActiveTasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onToggleCompleted={handleToggleCompleted}
              />
            ))
          ) : (
            // Message for no active tasks
            <p className='mt-[100px] w-fit h-fit p-12 bg-[#ffffff69] border-2 border-violet-900'>No active tasks yet.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ActivePage;