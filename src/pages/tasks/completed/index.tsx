import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { deleteTask } from '../../../store/taskslice'; // Import deleteTask action
import { Task } from '../../../components/molecules/taskform';

const CompletedPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleDeleteTask = (taskId: string) => {
    // Dispatch deleteTask action to delete the task
    dispatch(deleteTask(taskId));
  };

  // Filter out completed tasks
  const completedTasks = tasks.filter(task => task.completed);

  // Filter out duplicate tasks based on their ID
  const uniqueCompletedTasks = completedTasks.filter((task, index, self) =>
    index === self.findIndex((t) => t.id === task.id)
  );

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {uniqueCompletedTasks.length > 0 ? (
            uniqueCompletedTasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask} // Pass handleDeleteTask function as prop
                checked={true} // Set checked to true for completed tasks
              />
            ))
          ) : (
            <p>No completed tasks yet.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default CompletedPage;
