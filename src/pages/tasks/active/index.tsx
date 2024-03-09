// pages/tasks/active/index.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store'; // Import RootState as a type

const ActivePage: React.FC = () => {
  // Access tasks from Redux store state
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {/* Map through tasks and render TaskCard for each task */}
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </>
  );
};

export default ActivePage;
