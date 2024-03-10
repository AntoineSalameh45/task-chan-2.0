// CompletedPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { deleteTask, updateTaskStatus } from '../../../store/taskSlice';
import { Task } from '../../../components/molecules/taskform';

const CompletedPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleCompleted = (taskId: string) => {
    dispatch(updateTaskStatus({ taskId, completed: false })); // Update task status to active
  };

  const completedTasks = tasks.filter(task => task.completed);

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
                onDeleteTask={handleDeleteTask}
                onToggleCompleted={handleToggleCompleted} // Pass handleToggleCompleted function
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
