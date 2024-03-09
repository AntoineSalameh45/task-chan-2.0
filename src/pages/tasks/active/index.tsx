import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import {  deleteTask } from '../../../store/taskslice';
import { Task } from '../../../components/molecules/taskform';

const ActivePage: React.FC = () => {
  const dispatch = useDispatch();
  const activeTasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {activeTasks ? (
            activeTasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask} // Pass handleDeleteTask function
              />
            ))
          ) : (
            <p>No active tasks yet.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ActivePage;
